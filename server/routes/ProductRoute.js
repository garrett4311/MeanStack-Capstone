const express = require('express');
const product = require('../controllers/ProductController');
const router = express.Router();


const { authMiddleware } = require('../controllers/ProductController')

//display all users
router.get("/productsFromDb", product.GetProductInfoFromDb);

//delete user
router.delete("/deleteProductById/:id", product.DeleteProduct);

//add user
router.post("/addNewProduct", product.AddProduct);

//update user
router.put("/updateProduct", product.UpdateProduct);
module.exports = router