require("dotenv").config()
const cors = require("cors")
const express = require("express")
const app =  express();
app.use(cors())


const productsStore = require("./database/models/productsModel")

const DBconnection = require("./database/models/connect")
app.use(express.json())

DBconnection()

const addProductsRoute = require("./routes/addproducts")
const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")

app.use("/addProduct", addProductsRoute)
app.use("/login", loginRoute)
app.use('/signup', signupRoute)

// app.get('/', (req,res )=>{
//     res.send("welcome")
// })
app.listen(8000,()=>{
    console.log("app listening at port 8000")
})