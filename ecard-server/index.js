const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const login = require("./routes/login")
const register = require("./routes/register")
const profile = require("./routes/profile")
const cards = require("./routes/cards")


const app = express();
const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/profile", profile);
app.use("/api/cards", cards);

app.listen(port, () => console.log("Server started on port", port));