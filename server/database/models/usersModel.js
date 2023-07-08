const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    Role:{type:String, required:false}
})

const Users = mongoose.model("Users", userSchema)
module.exports = Users