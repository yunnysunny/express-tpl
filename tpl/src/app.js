const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const {
    slogger,
    port,
} = require('./config');
const requestRecordFilter = require('./filters/request_record_filter');
const {filter: requestValidator} = require('validator-param');

const app = express();
app.enable('trust proxy');

// view engine setup
app.set('port', port);
app.use(requestRecordFilter());

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '1mb'
}));


// app.use(modifyParser);
app.use(requestValidator({
    basePath: path.join(__dirname, './validators'),
    urlPrefix: '/i/',
    filenameReplaces: {
        '_': '/'
    },
    filenameSuffix: '_schema.js'
}));

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found:' + req.path);
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    const status = err.status;
    if (status === 404) {
        return res.status(404).send(err.message || '未知异常');
    }
    res.status(status || 500);
    slogger.error('发现应用未捕获异常', err);
    res.send({
        msg: err.message || '未知异常',
        code: 0xffff
    });
});


module.exports = app;
