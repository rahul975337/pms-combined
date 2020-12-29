import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./CompanyDetails.css";
function CompanyDetails({ companyName, description, email, website, address }) {
  // const baseUrl = "http://localhost:3001";
  // const [companiesList, setCompaniesList] = useState([]);
  // const getCompanies = () => {
  //   axios.get(`${baseUrl}/companies`).then((response) => {
  //     setCompaniesList(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getCompanies();
  // });
  // cname, cdescription, email, phone, website, adrs, package, mincgpa, position;
  return (
    <div className=" add-placement-box">
      <ToastContainer position="bottom-center" />
      <h2>{companyName}</h2>
      <form>
        <div className="add-placement-form">
          <p>Company Info</p>
          <p>{description}</p>
        </div>
        <div className="add-placement-form">
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className="add-placement-form">
          <p>Website</p>
          <p>{website}</p>
        </div>
        <div className="add-placement-form">
          <p>Address</p>
          <p>{address}</p>
        </div>
      </form>
    </div>
  );
}

export default CompanyDetails;
