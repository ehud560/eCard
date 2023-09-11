const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    middleName: {
        type: String,
        required: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2
    },
    phone: {
        type: String,
        required: true,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    image_url: {
        type: String,
        required: true,
        minlength: 2,
    },
    image_alt: {
        type: String,
        required: true,
        minlength: 2,
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
    },
    country: {
        type: String,
        required: true,
        minlength: 2,
    },
    city: {
        type: String,
        required: true,
        minlength: 2,
    },
    street: {
        type: String,
        required: true,
        minlength: 2,
    },
    housenumber: {
        type: String,
        required: true,
        minlength: 1,
    },
    zip: {
        type: String,
        required: true,
        minlength: 2,
    },
    buisness: {
        type: Boolean,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
})

const User = mongoose.model("users", userSchema);
module.exports = User;