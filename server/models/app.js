const mongoose = require('mongoose');



const autoIncrement = require('mongoose-auto-increment');   //自增ID 模块
autoIncrement.initialize(mongoose.connection);        //初始化


// define the App model schema
const AppSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     index: true,
    //     unique: true
    // },
    createTime: Date,
    name: String,
    description: String,
    downloadLink: {
        primaryDownloadLink: String,
        secondaryDownloadLink: String,
        user: String,
        password: String,
    },
    packageName: String,
    icon: String,
    plugin: String
});

AppSchema.plugin(autoIncrement.plugin, {               //自增ID配置
    model: 'Apps',
    field: 'id',
    startAt: 1000,
    incrementBy: 1
});

module.exports = mongoose.model('App', AppSchema);
