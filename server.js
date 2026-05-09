require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let logs = [];

let botStats = {
  servers: 0,
  users: 0,
  ping: 0
};

app.get("/api/logs", (req, res) => {
  res.json(logs);
});

app.get("/api/stats", (req, res) => {
  res.json(botStats);
});

app.post("/api/log", (req, res) => {
  logs.unshift(req.body);

  if (logs.length > 100) {
    logs.pop();
  }

  res.sendStatus(200);
});

app.post("/api/stats", (req, res) => {
  botStats = req.body;
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Dashboard running on http://localhost:3000");
});