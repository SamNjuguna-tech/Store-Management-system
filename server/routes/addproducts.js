const express = require("express")
const router = express.Router();

const Auth = require("./authMiddleWare")


router.post("/",Auth, (req, res) => {
   
   res.json(req.user)
})

module.exports = router