const express = require("express");
const app = express();



const courierController = require("./controller/Couriers.controllers");

const pincodeController = require("./controller/pin.controller");
app.use(express.json());
app.use("/pins",pincodeController);
app.use("/couriers",courierController);


module.exports = app