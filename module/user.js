

var mongoose = require("../db")

var userSchema = new mongoose.Schema({
    username: String,    
    password: String      
});

var u = mongoose.model('user', userSchema);

module.exports = u;