const mongoose = require("mongoose")

// create and export a database connection
module.exports = async() => {
    await mongoose.connect("mongodb://localhost:27017/clothing_store",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => console.log("connection to database is successful"))
      .catch(arr => console.log("error connecting to database"));  

    return mongoose
 
}



