// Libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const { mongoURI } = require("./config/keys");

mongoose
  .connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(console.log("Connected to MongoDB!"))
  .catch(console.log);

const app = express();

// middleware bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api/products', require('./routes/api/products'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
