const fs = require('fs');
const User = require('./model');

// post
async function store(req, res, next) {
    try {
        let payload = req.body;
        let user = new User(payload);
        await user.save()
        return res.json(user);

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
        let user = new User(payload);
        await User.findOneAndUpdate({ _id: req.params.id }, payload, { new: true, runValidators: true });
        return res.json(user);

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
        let user = await User.find();
        return res.json(user);
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
        let user = await User.findById(req.params.id);
        return res.json(user);
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
        let user = await User.findOneAndDelete({_id:req.params.id});
        return res.json(user);
    } catch (err) {
        next(err);
    }
}

module.exports = { index, store, update , destroy, findById}