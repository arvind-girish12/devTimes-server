const express = require("express");
const app = express();
const { port } = require("./config/app-config");
const mainRouter = require("./router");
const db = require("./utils/dbUtils");
const bodyParser = require("body-parser");

db.connect();
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", mainRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
