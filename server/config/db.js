const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345",
  database: "pms",
});

module.exports = db;
