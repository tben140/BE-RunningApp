require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const apiRouter = require("./routes/apiRouter");
const { customErrors, allOtherErrors } = require('./utils/errorHandler')


app.use(express.json());
app.use("/api", apiRouter);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});
app.use(customErrors)
app.use(allOtherErrors)

module.exports = { app };
