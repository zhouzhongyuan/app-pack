const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');   //自增ID 模块
autoIncrement.initialize(mongoose.connection);        //初始化

// define the App model schema
const AppSchema = new mongoose.Schema({
    createTime: Date,
    name: String,
    description: String,
    primaryDownloadLink: String,
    secondaryDownloadLink: String,
    user: String,
    password: String,
    packageName: String,
    icon: String,
    plugin: String
});
//自增ID配置
AppSchema.plugin(autoIncrement.plugin, {
    model: 'Apps',
    field: 'id',
    startAt: 1000,
    incrementBy: 1
});

module.exports = mongoose.model('App', AppSchema);
