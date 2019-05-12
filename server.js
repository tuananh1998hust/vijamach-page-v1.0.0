const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// API Routes
const products = require("./api/routes/products");
const messages = require("./api/routes/messages");
// keys
const keys = require("./config/keys");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Connect DB
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB is connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/products", products);
app.use("/api/messages", messages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
