const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
var cors = require("cors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API RUNNING...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
