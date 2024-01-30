const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');

router.get('/', ctrl.main);

router.get('/authcheck', ctrl.authcheck);

router.get('/logout', ctrl.logout);

module.exports = router;
