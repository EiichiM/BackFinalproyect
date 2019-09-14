const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    marca: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;