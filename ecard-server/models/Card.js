const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    subtitle: {
        type: String,
        required: false,
        minlength: 0
    },
    description: {
        type: String,
        required: false,
        minlength: 0
    },
    phone: {
        type: String,
        required: false,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    web: {
        type: String,
        required: false,
        minlength: 0
    },
    image_url: {
        type: String,
        required: false,
        minlength: 0,
    },
    image_alt: {
        type: String,
        required: false,
        minlength: 0,
    },
    state: {
        type: String,
        required: true,
        minlength: 0,
    },
    country: {
        type: String,
        required: true,
        minlength: 0,
    },
    city: {
        type: String,
        required: true,
        minlength: 0,
    },
    street: {
        type: String,
        required: true,
        minlength: 0,
    },
    housenumber: {
        type: String,
        required: true,
        minlength: 0,
    },
    zip: {
        type: String,
        required: true,
        minlength: 0,
    },
})

const User = mongoose.model("cards", cardSchema);
module.exports = User;