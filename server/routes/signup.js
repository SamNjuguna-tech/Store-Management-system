const express = require("express")
const router = express.Router();

const crypto = require('node:crypto');


// encrypt the password, i've used crypto
function hashPassword(content){
   const alg = "sha256";

   const hash = crypto.createHash(alg);
   hash.update(content)
   const hashedPswd = hash.digest('hex');

   return hashedPswd;

}




// import schema 
const userSchema = require('../database/models/usersModel')



router.post("/", (req, res) => {
    const username = req.body.username
    const password = hashPassword(req.body.password)
    const role = ""

    const UserData = {username:username, password:password, role:role}
    // res.json(UserData)

    if (UserData) {
        let newUser = new userSchema(UserData)

        newUser.save()
            .then((result) => {
                res.json("user saved successfuly")
            }).catch((err) => {
                res.json(err)
            });
    } else {
        res.json("plase fill in your user name and password")
    }

    
})

module.exports = router