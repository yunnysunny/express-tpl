exports.callService = function(req, res, service,...args) {
    args.push(function serviceCallback(err,data) {
        if (err) {
            return res.send(err);
        }
        res.send({code:0,data});
    });
    service(...args);
};

exports.callServiceWithRawReturn = function(req, res, service,...args) {
    args.push(function(err,data) {
        if (err) {
            return res.send(err);
        }
        res.send({data});
    });
    service(...args);
};
