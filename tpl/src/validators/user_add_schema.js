const {ERROR_CODE} = require('../lib/code');

module.exports = {
    account:{
        required:[true,ERROR_CODE.ACCOUNT_EMPTY]
    },
    passwd:{
        require:[true,ERROR_CODE.PASSWORD_EMPTY]
    },
    nickname:{
        type:String
    }
};
