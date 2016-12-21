const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

router.post('/appname', (req, res, next) => {
    return res.json({
        success: true,
        appName: req.body.appName
    });

});

module.exports = router;
