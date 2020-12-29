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
  database: "pms1",
});

/////////////////////S E R V E R   P O R T SETUP///////////////
app.listen(3001, () => {
  console.log("hurrayy , server running on port 3001");
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR COMPANIES//////////////

app.get("/companies", (req, res) => {
  db.query("SELECT * FROM companydetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//////////////////GET REQUEST TO SHOW/READ DATA FOR PLACEMENTS//////////

app.get("/placements", (req, res) => {
  db.query("SELECT * FROM updateddrive", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// ***************************************************************//////////
//////////////////ROUTE FOR REGISTERATION /////////////
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
  const usn = req.body.usn;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM slogin WHERE usn = ? AND pass = ?",
    [usn, pass],
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
  const email = req.body.email;
  const pass = req.body.pass;

  db.query(
    "SELECT * FROM alogin WHERE email = ? AND pass = ?",
    [email, pass],
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
  const cname = req.body.cname;
  const cdescription = req.body.cdescription;
  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;
  const adrs = req.body.adrs;
  const package = req.body.package;
  const mincgpa = req.body.mincgpa;
  const position = req.body.position;

  db.query(
    "INSERT INTO companydetails (cname,cdescription,email,phone,website,adrs,package,mincgpa,position) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      cname,
      cdescription,
      email,
      phone,
      website,
      adrs,
      package,
      mincgpa,
      position,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
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
  const sname = req.body.sname;
  const usn = req.body.usn;
  const batch = req.body.batch;
  // const cgpa = req.body.cgpa;
  const cname = req.body.cname;
  const pdate = req.body.pdate;
  const package = req.body.package;
  const position = req.body.position;

  db.query(
    "INSERT INTO updateddrive (sname,usn,batch,cname,pdate,package,position) VALUES (?,?,?,?,?,?,?)",
    [sname, usn, batch, cname, pdate, package, position],
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
