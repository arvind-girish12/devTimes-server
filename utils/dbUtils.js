const mongoose = require("mongoose");

const { dbUrl } = require("../config/db-config");
const db = {};

db.connect = () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true }, () =>
    console.log(`connection established with ${dbUrl}`)
  );
};

module.exports = db;
