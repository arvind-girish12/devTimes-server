const express = require("express");
const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  res.send("Dashboard API");
});

module.exports = dashboardRouter;
