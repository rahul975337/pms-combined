import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddCompany.css";
function AddCompany() {
  const [name, setName] = useState("");
  const [website, seWebsite] = useState("");
  const [salary, setSalary] = useState("");
  const [eligibility, setEligibility] = useState(0);
  const [position, setPosition] = useState("");
  const baseUrl = "http://localhost:3001";

  const addCompany = () => {
    Axios.post(`${baseUrl}/addcompany`, {
      name: name,
      website: website,
      salary: salary,
      eligibility: eligibility,
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
    <div className=" add-company-box">
      <ToastContainer position="bottom-center" />
      <h2>Add a company</h2>
      <form>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setName(e.target.value)}
          />
          <label>Company Name</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => seWebsite(e.target.value)}
          />
          <label>Website</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setSalary(e.target.value)}
          />
          <label>Salary</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setEligibility(e.target.value)}
          />
          <label>Eligibility</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Position</label>
        </div>
        <btn onClick={addCompany}>Submit</btn>
      </form>
    </div>
  );
}

export default AddCompany;
