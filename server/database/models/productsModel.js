const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    brand: { type: String },
    price: { type: Number },
    variations: [{
      color: { type: String },
      sizes: [{ type: String }]
    }]

})

const Products =  mongoose.model("Products", productSchema);

module.exports = Products