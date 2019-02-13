const slogger = require('node-slogger');
const mongoose = require('mongoose');
const configObj = require('../config.json');
const settings = require('config-settings').init(configObj);

exports.port = settings.loadNecessaryInt('port');

//保证配置文件中的debugfilename属性存在，且其所在目录在当前硬盘中存在

const errorFile = settings.loadNecessaryFile('errorLogFile', true);

slogger.init({
    flushInterval:500,
    logFiles:[
        {category:'error',filename:errorFile}
    ]
});
exports.slogger = slogger;

let mongoConfig = settings.loadNecessaryObject('mongoConfig');
mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig.url, mongoConfig.option); // connect to database
