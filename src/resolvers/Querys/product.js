
const Product = require('../../models/Products');

const getAllProducts = async (obj, args) => {
    const products = await Product.find();
    if(!products) throw new Error('No hay Products');
    return Product;
}

const getIdProduct = async (obj, args) => {
    const params = args.id;
    const product = await Product.findById(params);
    if(!product) throw new Error('No se encontro el Produto')
    return Product;
}

module.exports = {
    getAllProducts,
    getIdProduct
}