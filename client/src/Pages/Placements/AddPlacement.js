import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddPlacement.css";
function AddPlacement() {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [cgpa, setCgpa] = useState(0);
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const baseUrl = "http://localhost:3001";
  const addPlacement = ({ handleOpen }) => {
    Axios.post(`${baseUrl}/addplacement`, {
      name: name,
      batch: batch,
      cgpa: cgpa,
      company: company,
      salary: salary,
      position: position,
    }).then((response) => {
      // if (response.data.message) {
      //   return toast(" User already exists", { type: "error" });
      // }
      if (response.data.err) {
        return toast(" User already exists", { type: "error" });
      }
    });
  };
  return (
    <div className=" add-placement-box">
      <ToastContainer position="bottom-center" />
      <h2>Add a placement</h2>
      <form>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setName(e.target.value)}
          />
          <label>Student Name</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setBatch(e.target.value)}
          />
          <label>Batch</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setCgpa(e.target.value)}
          />
          <label>CGPA</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setCompany(e.target.value)}
          />
          <label>Company</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setSalary(e.target.value)}
          />
          <label>Salary</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Position</label>
        </div>
        <btn onClick={addPlacement}>Submit</btn>
      </form>
    </div>
  );
}

export default AddPlacement;
