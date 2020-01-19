const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    by: {type: String, required: true},
    link: {type: String, required: true}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product, ProductSchema}