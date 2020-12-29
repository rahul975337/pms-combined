import React from "react";
import { ToastContainer } from "react-toastify";
import "./CompanyDetails.css";
function CompanyDetails() {
  return (
    <div className=" add-placement-box">
      <ToastContainer position="bottom-center" />
      <h2>Add a placement</h2>
      <form>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>Student Name</label>
        </div>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>Batch</label>
        </div>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>CGPA</label>
        </div>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>Company</label>
        </div>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>Salary</label>
        </div>
        <div className="add-placement-form">
          <p>Company.........</p>
          <label>Position</label>
        </div>
        <btn>Submit</btn>
      </form>
    </div>
  );
}

export default CompanyDetails;
