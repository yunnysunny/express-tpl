const userService = require('../services/user_service');
const {callService} = require('../helpers/controller_helper');


exports.doSign = function(req, res) {
    callService(req,res,userService.saveUser, req.body);
};

