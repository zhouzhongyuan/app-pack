const browserConfig = require('./webpack.browser.config');
const serverConfig = require('./webpack.server.config');
module.exports = [
    Object.assign({} , browserConfig),
    Object.assign({} , serverConfig),
];