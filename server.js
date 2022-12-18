const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialize");

mongoose.set("debug", true);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`Connected to localhost: ${PORT}`));
})