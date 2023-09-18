const express = require("express");
const auth = require("../middleware/auth");
const joi = require("joi");
const Card = require("../models/Card");

const router = express.Router();

const cardSchema = joi.object({
    title: joi.string().required().min(2),
    subtitle: joi.string().min(0),
    description: joi.string().required().min(0),
    phone: joi.string().required().min(10),
    email: joi.string().required().email(),
    web: joi.string().min(0),
    image_url: joi.string().min(0),
    image_alt: joi.string().min(0),
    state: joi.string().required().min(0),
    country: joi.string().required().min(0),
    city: joi.string().required().min(0),
    street: joi.string().required().min(0),
    housenumber: joi.string().required().min(0),
    zip: joi.string().required().min(0),
    creatorId: joi.string().min(2)
});

router.post("/", auth, async (req, res) => {
    try {
        // 1. check if user is an admin
        if (!req.payload.isAdmin)
            return res.status(400).send("Access denied. User is not an admin");

        // 2. joi validation
        const { error } = cardSchema.validate(req.body);
        if (error) return res.status(400).send(error);

        // 3. check if card already exists
        let card = await Card.findOne({
            name: req.body.name,
            email: req.body.email,
        });

        if (card) return res.status(400).send("Card already exists");

        // 4. add card
        card = new Card(req.body);
        await card.save();

        // 5. return new card details
        res.status(201).send(card);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).send(cards);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) return res.status(404).send("No such card");
        res.status(200).send(card);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        // 1. check if user is an admin
        if (!req.payload.isAdmin)
            return res.status(400).send("Access denied. User is not an admin");

        // 2. joi validation
        const { error } = cardSchema.validate(req.body);
        if (error) return res.status(400).send(error);

        // 3. check if card already exists
        let card = await Card.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            req.body,
            { new: true }
        );

        if (!card) return res.status(400).send("Card already exists");

        res.status(200).send(card);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        // 1. check if user is an admin
        if (!req.payload.isAdmin)
            return res.status(400).send("Access denied. User is not an admin");

        let card = await Card.findByIdAndDelete({ _id: req.params.id });
        if (!card) return res.status(404).send("No such card");
        res.status(200).send("Card deleted successfully!");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;