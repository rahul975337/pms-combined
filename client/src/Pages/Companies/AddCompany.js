import React, { useState } from "react";
import "./AddCompany.css";
function AddCompany() {
  const [name, setName] = useState("");
  const [website, seWebsite] = useState("");
  const [salary, setSalary] = useState("");
  const [eligibility, setEligibility] = useState(0);
  const [position, setPosition] = useState("");
  const addCompany = () => {
    console.log("====================================");
    console.log("hey");
    console.log("====================================");
  };
  return (
    <div className=" add-company-box">
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
            type="password"
            name=""
            required="true"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Position</label>
        </div>
        <btn onClick={addCompany}>
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
          Submit
        </btn>
      </form>
    </div>
  );
}

export default AddCompany;
