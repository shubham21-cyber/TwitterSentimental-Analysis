// const routes = require("./server/routes");

const app = require("express")();
const express = require("express");

const connectdb = require("./config/db");
const auth = require("./middleware/auth");
const Tweet = require("./models/Tweet");
const PORT = process.env.PORT || 5000;
connectdb();
app.use(require("cors")());
app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => {
  console.log("Server Started on PORT : ", PORT);
});
