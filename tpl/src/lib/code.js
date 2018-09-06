const BASE_CODE_PARAM = 1000;
const BASE_CODE_LOGICAL = 2000;
const BASE_CODE_FATAL = 3000;
const ERROR_CODE = {
    APP_ID_NOT_EXIST: {code: BASE_CODE_FATAL, msg: 'app_id不存在'},

    SAVE_USER_FAIL: {code: BASE_CODE_LOGICAL + 1, msg:'保存用户失败'},
    CHECK_USER_FAIL: {code:BASE_CODE_LOGICAL + 2, msg:'检查用户唯一性时失败'},
    USER_ACCOUNT_HAS_EXISTS: {code:BASE_CODE_LOGICAL +3, msg:'用户信息已经存在'},
    
    ACCOUNT_EMPTY: {code: BASE_CODE_PARAM + 1, msg: '用户账号为空'},
    PASSWORD_EMPTY: {code:BASE_CODE_PARAM+2, msg:'密码为空'}
};

exports.ERROR_CODE = ERROR_CODE;

exports.genErrorCallback = function(code, callback, msg) {
    if(msg) {
        return callback({code: code.code, msg});
    }
    callback(code);
};

exports.genErrorRes = function(code, res, msg) {
    if(msg) {
        return res.send({code: code.code, msg});
    }
    res.send(code);
};
