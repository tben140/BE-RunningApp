require("dotenv").config();
const DB_URI = 'mongodb://localhost:27017/project-bhilt';
const express = require("express");
app = express();
port = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(require("./routes/routes.js"));

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});
