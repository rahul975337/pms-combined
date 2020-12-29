const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
////////////
//cors helps in sending crossplatform information lije from frontend to backend
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345",
  database: "pms",
});

/////////////////////S E R V E R   P O R T SETUP///////////////
app.listen(3001, () => {
  console.log("hurrayy , server running on port 3001");
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
/ /; //////////////////ROUTE FOR REGISTERATION /////////////
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username,password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);

        res.send({ err: err });
        return;
        // res.send({ message: "Wrong username/password combination" });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});

/////////////////////ROUTE FOR LOGIN /////////////
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADMIN LOGIN /////////////
app.post("/admin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADD COMPANIES /////////////
app.post("/addcompany", (req, res) => {
  const name = req.body.name;
  const website = req.body.website;
  const salary = req.body.salary;
  const eligibility = req.body.eligibility;
  const position = req.body.position;

  db.query(
    "INSERT INTO companies (name,website,salary,eligibility,position) VALUES (?,?,?,?,?)",
    [name, website, salary, eligibility, position],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
        // res.send({ message: "Wrong username/password combination" });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});

/////////////////////ROUTE FOR ADD PLACEMENTS /////////////
app.post("/addplacement", (req, res) => {
  const name = req.body.name;
  const batch = req.body.batch;
  const cgpa = req.body.cgpa;
  const company = req.body.company;
  const salary = req.body.salary;
  const position = req.body.position;

  db.query(
    "INSERT INTO placements (name,batch,cgpa,company,salary,position) VALUES (?,?,?,?,?,?)",
    [name, batch, cgpa, company, salary, position],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
        // res.send({ message: "Wrong username/password combination" });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "already exists" });
      }
    }
  );
});
