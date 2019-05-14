const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// Routes
const admin = require("./routes/admin");
const adminDashBoard = require("./routes/adminDashBoard");
// API Routes
const products = require("./api/routes/products");
const messages = require("./api/routes/messages");
const orders = require("./api/routes/orders");
// Auth Middleware
const auth = require("./middleware/auth");
// keys
const keys = require("./config/keys");

const app = express();

// View Engine
app.set("view engine", "pug");
app.set("views", "./views");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser(keys.secretOrKey));
// Connect DB
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB is connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/admin", admin);
app.use("/admin/dashboard", auth, adminDashBoard);
app.use("/api/products", products);
app.use("/api/messages", messages);
app.use("/api/orders", orders);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
