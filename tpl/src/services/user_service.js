const {UserModel} = require('./index');
const slogger = require('node-slogger');
const async = require('async');
const {genErrorCallback,ERROR_CODE} = require('../lib/code');

exports.saveUser = function(item,callback) {
    async.waterfall([
        function(next) {
            UserModel.findOne({account:item.account},function(err,item) {
                if (err) {
                    slogger.error('检查用户信息时失败',err);
                    return genErrorCallback(
                        ERROR_CODE.CHECK_USER_FAIL,next
                    );
                }
                if (item) {
                    return genErrorCallback(
                        ERROR_CODE.USER_ACCOUNT_HAS_EXISTS,next
                    );
                }
                next();
            });
        },
        function(next) {
            new UserModel(item).save(function(err) {
                if (err) {
                    slogger.error('保存用户时失败',err);
                    return genErrorCallback(
                        ERROR_CODE.SAVE_USER_FAIL,next
                    );
                }
                next();
            });
        }
    ],callback);
    
};