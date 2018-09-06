const slogger = require('node-slogger');
const serverIp = require('ip').address();
const pid = process.pid;

module.exports = function(kafkaSchedule,alarm) {
    return function(req, res, next) {
        //记录请求时间
        const req_time = Date.now();
        res.on('finish', function() {
            //记录响应时间
            const now = Date.now();
            const duration = now - req_time;
            const method = req.method;
            
            const ip = req.ip;
            const original_url = req.originalUrl;
            const user_agent = req.get('User-Agent') || '';
            const host = req.hostname;
            const path = req.path;
            const content_length = res._contentLength;
            const status_code = res.statusCode;
            const req_data = method === 'POST' ?
                req.body :
                req.query;
            const referer = req.get('referer') || '';

            
            if (kafkaSchedule) {
                const data = {
                    host,
                    original_url,
                    path,
                    user_agent,
                    method,
                    ip,
                    duration,
                    pid,
                    content_length,
                    status_code,
                    req_time,
                    req_data,
                    referer,
                    created_at: now
                };
                kafkaSchedule.addData(data);
            }
            
            if (alarm) {
                if (status_code >= 500) {
                    alarm.sendAll(`client-server:${status_code}:${serverIp}:${original_url}`, function(err) {
                        if (err) {
                            slogger.error('发送警告数据时报错', err);
                        }
                    });
                }
            }
    
            
            slogger.info(`${ip} ${duration} ms "${method} ${original_url} HTTP/${req.httpVersion}" ${status_code} ${content_length} "${referer}" "${user_agent}`);
        });
    
        next();
    };
}; 