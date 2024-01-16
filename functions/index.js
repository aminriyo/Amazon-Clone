/** @format */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { error } = require("firebase-functions/logger");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// config app
const app = express();

// middlewares
app.use(
    cors({
        origin: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello word"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(total),
            currency: "usd",
        });
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error);
        res.status(500).setDefaultEncoding("something went wrong!");
    }
});

// listern
app.listen(10000, (error) => {
    if (!error) console.log("server is listening to port 10000");
});
