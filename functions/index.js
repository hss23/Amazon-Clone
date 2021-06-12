/* eslint-disable max-len */
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51J1PoUC5o66MHo6PboGE9sMSBBtFWshv5BFslWne2aRVfsSqnmz4fU3TsGp7nVYJ81OEwQe6ANxCmMVZ4QYb9JJm001swMldSy");

// API

// App config
const app = express();
// middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("helloworld"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// listencommand
exports.api = functions.https.onRequest(app);
// example end point
// http://localhost:5001/clone-446f0/us-central1/api