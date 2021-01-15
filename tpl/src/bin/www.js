#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const http = require('http');
const config = require('../config');
const slogger = require('node-slogger');
const alarm = config.alarm;


/**
 * Get port from environment and store in Express.
 */

var port = app.get('port');


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        slogger.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        slogger.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    slogger.info('Listening on ' + bind);
}


process.on('uncaughtException', function(err) {

    slogger.error('出现重大异常，重启当前进程',err);
    
    if (process.env.DEBUG_LOCAL === 'true') {
        slogger.info('kill current proccess:'+process.pid);
        return process.exit();
    }
    if (alarm) {
        alarm.sendAll(err,function(err) {
            if (err) {
                slogger.error('发送警告数据时报错',err);
            }
            slogger.info('kill current proccess:'+process.pid);
            process.exit();
        });
    }
    
    
//    timer.clear();

});
