const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    subtitle: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
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
    web: {
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
        minlength: 2,
    },
    zip: {
        type: String,
        required: true,
        minlength: 2,
    },
})

const User = mongoose.model("cards", cardSchema);
module.exports = User;