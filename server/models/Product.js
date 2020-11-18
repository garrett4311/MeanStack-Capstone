var mongoose = require("mongoose");
mongoose.pluralize(null);
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id:Number,
    name:String,
    image:String,
    type:String,
    price:Number
});

var ProductModel = mongoose.model("Product", ProductSchemaRef);
module.exports = ProductModel;