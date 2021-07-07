const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = require("./config/db");
//C O R S     helps in sending crossplatform information lije from frontend to backend
app.use(cors());
app.use(express.json());

/////////////////////S E R V E R   P O R T SETUP///////////////
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`hurrayy , server running on port ${PORT}`);
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR STUDENTS//////////////

app.get("/students", (req, res) => {
  db.query("SELECT * FROM studentdetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
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
  const usn = req.body.usn;
  const pass = req.body.pass;

  db.query(
    "INSERT INTO slogin (usn,pass) VALUES (?,?)",
    [usn, pass],

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

/////////////////////ROUTE FOR ADD STUDENTS /////////////
app.post("/addstudents", (req, res) => {
  const sname = req.body.sname;
  const usn = req.body.usn;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const dob = req.body.dob;
  const branch = req.body.branch;
  const cgpa = req.body.cgpa;

  db.query(
    "INSERT INTO studentdetails (sname,usn,mobile,email,dob,branch,cgpa) VALUES (?,?,?,?,?,?,?)",
    [sname, usn, mobile, email, dob, branch, cgpa],
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
//////////////////GET REQUEST TO SHOW/READ DATA FOR UserProfile//////////

app.get("/profile", (req, res) => {
  db.query(
    "SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa FROM slogin AS sl INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR AdminProfile//////////

app.get("/adminprofile", (req, res) => {
  db.query(
    "SELECT al.email,ad.aname,ad.phone,ad.depname FROM alogin AS al INNER JOIN admindetails AS ad ON al.email = ad.email;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
