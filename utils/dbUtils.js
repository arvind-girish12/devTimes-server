const mongoose = require("mongoose");
const _ = require("lodash");

const { dbUrl } = require("../config/db-config");
const db = {};

db.connect = async () => {
  const connection = await mongoose.connect(dbUrl, { useNewUrlParser: true });
  if (!_.isEmpty(connection)) {
    console.log(`connected to database with url ${dbUrl}`);
  }
};

module.exports = db;
