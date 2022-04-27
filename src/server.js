const mongoose = require("mongoose");
const connect = require("./config/db")
const app = require("./index");


app.listen(4000, async (res, req) => {
  await connect();
  console.log(" Db Connected Successfully");
});

  