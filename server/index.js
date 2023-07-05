require("dotenv").config()
const express = require("express")
const app =  express();

const productsStore = require("./database/models/productsModel")

const DBconnection = require("./database/models/connect")
app.use(express.json())

    DBconnection()



// app.post("/addProduct", async (req, res) => {
   
//     const data =  req.body;
//     console.log(data)


//     if (data) {
       
//         res.statusCode= 200;
//         let newProductStore = new productsStore(data)

//          newProductStore.save()
//         .then(data => res.json("Data has been successfully saved to the databasse"))
//         .catch(err => res.json(err))
//     } else {
//         res.json("empty body")
//     }
 
  
    
// })


const addProductsRoute = require("./routes/addproducts")
const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")

app.use("/addProduct", addProductsRoute)
app.use("/login", loginRoute)
app.use('/signup', signupRoute)


app.listen(8000,()=>{
    console.log("app listening at port 8000")
})