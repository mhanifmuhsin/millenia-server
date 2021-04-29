const mongoose = require('mongoose');

const {model,Schema} = mongoose;

const barangSchema = Schema({
    code:String,
    nama:String,
    satuan:String,
    harga:String,
},{timestamps:true})

module.exports = model('barang',barangSchema);