const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
////////////
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345",
  database: "pms",
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR COMPANIES//////////////

app.get("/companies", (req, res) => {
  db.query("SELECT * FROM companies", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//////////////////GET REQUEST TO SHOW/READ DATA FOR PLACEMENTS//////////////

app.get("/placements", (req, res) => {
  db.query("SELECT * FROM placements", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
/////////////////////S E R V E R   P O R T SETUP///////////////
app.listen(3001, () => {
  console.log("hurrayy , server running on port 3001");
});
