module.exports = function(validators) {
    return function(req, res, next) {
        const validator = validators[req.path];
        if (!validator) {
            return next();
        }
        const params = req.method === 'POST' ?
            req.body :
            req.query;
        const result = validator.doValidate(params);
        if (!result) {
            return next();
        }
        if (typeof (result) === 'string') {
            return res.send({code:1,msg:result});
        }
        res.send(result);
    };
};