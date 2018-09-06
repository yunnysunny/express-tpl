/**
 * User: sunny
 * Date: 15-4-15
 * Time: 下午5:18
 */
var request = require('request');
var slogger = require('node-slogger');
function parseResponse(url,description, error,response,body,callback) {
    if (error) {
        slogger.error('请求'+url+'失败',error);
        callback('请求'+description+'网络错误');
        return;
    }
    if (!response) {
        callback('请求'+description+'失败，未知错误');
        return;
    }
    if (response.statusCode != 200) {
        slogger.error(url, response.statusCode, body);
        callback('请求'+description+'失败['+response.statusCode+']');
        return;
    }
    callback(false,body);
}

exports.parseResponse = parseResponse;

function doGet(url, params,description, callback) {
    var options = {
        qs:params,
        json:true,
        timeout:5000
    };

    slogger.debug('请求地址',url,'请求参数',options);
    request.get(url,options,function(error,response,body) {
        parseResponse(url,description,error,response,body,callback);
    });
}
exports.doGet = doGet;

function doPost(url,params,description,callback) {
    var options = {form:params,json:true,timeout:5000};
    slogger.debug('请求地址',url,'请求参数',options);
    request.post(url,options,function(error,response,body) {
        parseResponse(url,description,error,response,body,callback);
    });
}
exports.doPost = doPost;

exports.doProxy = function(options, callback) {
    request(options, function (error, response, body) {
        parseResponse(options.url,'代理接口',error,response,body,function(err, body) {
            if (err) {
                slogger.error(`请求代理接口: ${options.url} 出错`, err );
                return callback('请求代理接口出错');
            }
            if (!body) {
                return callback(`请求通知接口: ${options.url} 无响应数据`);
            }
            // if (body.code !== 0) {
            //     slogger.error(`请求代理接口: ${options.url} 返回错误`, body);
            //     return callback(body.msg);
            // }
            callback(false, body);
        });
    });
};
