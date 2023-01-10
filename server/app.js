// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

// mongoose db
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Successfully connect to database")
  })
.catch(err=>console.log(err))

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
