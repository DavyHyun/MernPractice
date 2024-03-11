const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API RUNNING...");
});

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
