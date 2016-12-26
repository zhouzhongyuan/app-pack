const express = require('express');

const router = new express.Router();

var pluginList = require('../../config/pluginList.json');
// Read
router.get('/', (req, res) => {
    res.json(pluginList);

});
module.exports = router;
