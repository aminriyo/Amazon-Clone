/** @format */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51OYsCbCORph7gZmAGUppvHlnWqF2b8qrkg0KM1Z2XA5YsDkjQsXfPPjnPTNEv7VQqOm1519q55h8CtgxJ4KQYnsH00x5DFQRkj"
);
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

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(total),
            currency: "usd",
        });
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error);
        response.status(500).send("something went wrong!");
    }
});

// listern
app.listen(4242, (error) => {
    if (!error) console.log("server is listening to port 4242");
});
