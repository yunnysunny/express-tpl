const express = require('express');
const router = express.Router();
const user = require('../controllers/user_controller');


/*  */
router.get('/', function(req, res) {
    res.send('welcome home');
});
router.get('/server-check',function(req, res) {
    res.sendStatus(200);
});


// router.post('/i/playback/notify', device.notify);
router.post('/i/user/add', user.doSign);


module.exports = router;
