var ProductModel = require("../models/Product.js");

exports.GetProductInfoFromDb = (req,res)=> {
  ProductModel.find({},(err,data)=> {
    if (err) throw err;
    res.json(data);
  })
}

exports.DeleteProduct = (req,res)=> {
  var deleteId = req.params.id;
  ProductModel.deleteOne({_id:deleteId}, (err,result)=> {
    if(err) throw err;
    if(result.deletedCount>0) {
      res.json({"msg":"Product deleted successfully."});
    } else {
      res.json({"msg":"Product not present."});
    }
  })
}

exports.AddProduct = (req,res)=> {
  let newProduct = new ProductModel({
    _id:req.body._id,
    name:req.body.name,
    image:req.body.image,
    type:req.body.type,
    price:req.body.price
  });

  newProduct.save((err,result)=> {
    if(err){
      res.json({"msg":err})
    }

    res.json({"msg":"Product added successfully"});
    //console.log('works');
  })
}

//  **** FIX UPDATE STATEMENT ***
exports.UpdateProduct = (req,res)=> {
  
  var updateId = req.body._id;
  var updateName = req.body.name;
  var updateImage = req.body.image;
  var updateType = req.body.type;
  var updatePrice = req.body.price;
  
  ProductModel.updateOne({_id:updateId},{$set:{name:updateName,
              image:updateImage, type:updateType, price:updatePrice}},
              (err,result)=> {
                if(err) throw err;
                res.json({"msg":"Product updated successfully"});
              })
}