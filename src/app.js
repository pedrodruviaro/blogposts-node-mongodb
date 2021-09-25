const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => app.listen(3000, () => console.log("Servidor rodando!")))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);
