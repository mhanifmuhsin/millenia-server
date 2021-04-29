const fs = require('fs');
const Barang = require('./model');

// post
async function store(req, res, next) {
    try {
        let payload = req.body;
        let barang = new Barang(payload);
        await barang.save()
        return res.json(barang);

    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

// update
async function update(req, res, next) {
    try {
        let payload = req.body;
        let barang = new Barang(payload);
        await Barang.findOneAndUpdate({ _id: req.params.id }, payload, { new: true, runValidators: true });
        return res.json(barang);

    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

// get
async function index(req, res, next) {
    try {
        let barang = await Barang.find();
        return res.json(barang);
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

async function findById(req, res, next) {
    try {
        let barang = await Barang.findById(req.params.id);
        return res.json(barang);
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

// delete
async function destroy(req,res,next){
    try {
        let barang = await Barang.findOneAndDelete({_id:req.params.id});
        return res.json(barang);
    } catch (err) {
        next(err);
    }
}

module.exports = { index, store, update , destroy, findById}