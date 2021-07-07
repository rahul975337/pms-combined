import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddPlacement.css";
function AddPlacement() {
  const [sname, setSname] = useState("");
  const [usn, setUsn] = useState("");
  const [batch, setBatch] = useState("");
  const [pdate, setPdate] = useState("");
  const [cname, setCname] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const baseUrl = "http://localhost:3001";
  const addPlacement = ({ handleOpen }) => {
    Axios.post(`${baseUrl}/addplacement`, {
      sname: sname,
      usn: usn,
      batch: batch,
      cname: cname,
      pdate: pdate,
      package: salary,
      position: position,
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
      <h2>Add a placement</h2>
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
            onChange={(e) => setBatch(e.target.value)}
          />
          <label>Batch</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setCname(e.target.value)}
          />
          <label>Company</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setPdate(e.target.value)}
          />
          <label>Placed Date (YYYY-MM-DD)</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setSalary(e.target.value)}
          />
          <label>Package</label>
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
        <btn onClick={addPlacement}>Add</btn>
      </form>
    </div>
  );
}

export default AddPlacement;
