const crypto = require('crypto');
/**
 * @param data
 * @param app
 * @param app.secret
 */
const doSign = exports.doSign = function(data, secret) {
    const keys = Object.keys(data);
    keys.sort();
    const hash = crypto.createHmac('sha256',secret);
    const arr = [];
    let key;
    for (let i=0,len=keys.length;i<len;i++) {
        key = keys[i];
        if (key === 'sign') {
            continue;
        }
        arr.push( key + '=' + data[key]);
    }
    const str = arr.join('&');//console.log(str);
    const sign = hash.update(str,'utf-8').digest('hex');
    return sign;
};

/**
 * @param data
 * @param app
 * @param app.secret
 * @param signInput
 */
exports.verifySign = function(data, secret) {
    return doSign(data, secret) === data.sign;
};
