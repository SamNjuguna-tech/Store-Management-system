const express = require("express")
const router = express.Router();
require("dotenv").config()
const crypto = require('node:crypto');
const jwt = require("jsonwebtoken")

// authenticate user

function verifyPassword(password, hashedPassword){
const algo = 'sha256';

const hash = crypto.createHash(algo);
hash.update(password)
const hashImputPassword = hash.digest('hex')
return hashImputPassword === hashedPassword;
}

const userSchema = require("../database/models/usersModel");

router.post("/", (req, res) => {
    let reqBody = {...req.body}
    const UserName = reqBody.userName;
    const pswd = reqBody.password;


    let harshedPassword;

userSchema.findOne({username:UserName})
    .then((user) => {

        // assign db pass to hashedPassword
        harshedPassword = user.password;
        if ( verifyPassword(pswd, harshedPassword)) {
            const userPayload = {
                "username":user.username,
                "password": user.password,
            }
            // auth the user
            const accessToken = jwt.sign(userPayload,process.env.ACCESS_TOKEN_SECRET)
            res.json({"accessToken":accessToken})
        } else {
            res.json("wrong password or user name")
        }  
    })
    .catch((error) => {
        console.log(error)
    });





  
})

module.exports = router