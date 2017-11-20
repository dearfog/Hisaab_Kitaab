
var express = require('express');
var passport = require('passport');
var router = express.Router();
var controller = require('../controller/controller');

router.get('/', function (req, res) {
    res.send("Hey Got Get Req //")
});

router.post('/register', controller.register);

router.post('/login', controller.login);

router.get('/logout', function(req, res) {
    req.logout();
    res.send("O_o! logOut")
});
// router.get('/api/:ip',controller.db);
// router.get('/api/:ip/:db',controller.collection);
router.get('/api/:collection',controller.get);
router.get('/api/:collection/:id',controller.getById);
router.get('/api/:collection/:populate/:id',controller.populate);
router.post('/api/:collection',controller.post);
router.put('/api/:collection/:id',controller.put);
router.delete('/api/:collection/:id',controller.delete);

module.exports = router;