// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

// mongoose db

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes

//port / use env.PORT or default 8080
const port = process.env.PORT || 8080;

//listener

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
