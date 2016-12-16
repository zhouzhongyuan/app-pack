const express = require('express');

const router = new express.Router();
router.post('/login', (req, res, next) => {
    res.json({success: true});
});

module.exports = router;