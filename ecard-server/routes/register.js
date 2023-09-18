const express = require("express");
const joi = require("joi");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const registerSchema = joi.object({
    firstName: joi.string().required().min(1),
    middleName: joi.string().min(0),
    lastName: joi.string().required().min(1),
    phone: joi.string().required().min(10),
    email: joi.string().required().email(),
    password: joi.string().required().min(8),
    image_url: joi.string().min(0),
    image_alt: joi.string().min(0),
    state: joi.string().required().min(1),
    country: joi.string().required().min(1),
    city: joi.string().required().min(1),
    street: joi.string().required().min(1),
    housenumber: joi.string().required().min(1),
    zip: joi.string().required().min(1),
    isAdmin: joi.boolean(),
    buisness: joi.boolean(),
});

router.post("/", async (req, res) => {
    try {
        // 1. joi validation
        const { error } = registerSchema.validate(req.body);
        if (error) return res.status(400).send(error);

        // 2. check if user already exist
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("User already exist");

        // 3. create the user
        user = new User(req.body);

        // 4. encrypt the password & save user
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        // 5. create the token & response
        const token = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin, email: user.email },
            process.env.jwtKey
        );

        res.status(201).send(token);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;