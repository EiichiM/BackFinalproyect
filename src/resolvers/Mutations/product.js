const Product = require('../../models/Products');

const createProduct = async (obj, args) => {
   const params = args.data;
   const newProduct = Product({
       ...params
   }) 
   const miProduct = await newProduct.save();
   const product = await Product.findOne({_id:miProduct._id}).populate('user')
   return product
}

module.exports = {
    createProduct
}