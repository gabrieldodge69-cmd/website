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

// =====================
// WEBSITE ROUTE
// =====================
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// =====================
// API - LOGS
// =====================
app.get("/api/logs", (req, res) => {
  res.json(logs);
});

app.post("/api/log", (req, res) => {
  logs.unshift(req.body);

  if (logs.length > 100) {
    logs.pop();
  }

  res.sendStatus(200);
});

// =====================
// API - BOT STATS
// =====================
app.get("/api/stats", (req, res) => {
  res.json(botStats);
});

app.post("/api/stats", (req, res) => {
  botStats = req.body;
  res.sendStatus(200);
});

// =====================
// RAILWAY FIXED PORT
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Dashboard running on port ${PORT}`);
});