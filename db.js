
// 引入模块mongoose

var mongoose = require('mongoose');

// 连接到本地数据库 

mongoose.connect('mongodb://localhost:27017/photo-manager');

module.exports = mongoose