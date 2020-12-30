import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddStudent.css";
function AddStudent() {
  const [sname, setSname] = useState("");
  const [usn, setUsn] = useState("");
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState(0);

  const baseUrl = "http://localhost:3001";
  const addstudent = ({ handleOpen }) => {
    Axios.post(`${baseUrl}/addstudents`, {
      sname: sname,
      usn: usn,
      mobile: mobile,
      email: email,
      dob: dob,
      branch: branch,
      cgpa: cgpa,
    }).then((response) => {
      // if (response.data.message) {
      //   return toast(" User already exists", { type: "error" });
      // }
      if (response.data.err) {
        return toast("Some error", { type: "error" });
      } else return toast("Successfully Added", { type: "success" });
    });
  };
  return (
    <div className=" add-placement-box">
      <ToastContainer position="bottom-center" />
      <h2>Add a Student</h2>
      <form>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setSname(e.target.value)}
          />
          <label>Student Name</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setUsn(e.target.value)}
          />
          <label>USN</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setMobile(e.target.value)}
          />
          <label>Phone</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setDob(e.target.value)}
          />
          <label>DOB (YYYY-MM-DD)</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Branch</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setCgpa(e.target.value)}
          />
          <label>CGPA</label>
        </div>
        <btn onClick={addstudent}>Add</btn>
      </form>
    </div>
  );
}

export default AddStudent;
