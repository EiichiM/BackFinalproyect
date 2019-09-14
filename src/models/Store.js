const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = mongoose.Schema;
const CShema = new Schema({
    store_name: {
        type: String
    },
    name_product: {
        type: String
    },
    c_type: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    talla: {
        type: String
    },
    gender: {
        type: String
    },
    estilo: {
        type: String
    },
    url: {
        type: String
    },
}, { timestamps: true })

const Clothes = mongoose.model("clothingModel", CShema)
module.exports = { Clothes }