import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useStateValue } from "../../Context/StateProvider";
import "./Profile.css";
function AdminProfile({ companyName, description, email, website, address }) {
  const baseUrl = "http://localhost:3001";
  const [profiles, setProfiles] = useState([]);
  const [currPerson, setCurrPerson] = useState("");
  const [admin, dispatchAdmin] = useStateValue();

  const getProfiles = () => {
    axios.get(`${baseUrl}/adminprofile`).then((response) => {
      setProfiles(response.data);
    });
  };
  const currEmail = admin.admin[0].email;
  //   const getPerson = user.data[0].usn;
  console.log("====================================");
  console.log(admin.admin[0].email);
  console.log("====================================");
  console.log(profiles);

  useEffect(() => {
    getProfiles();
  }, []);
  useEffect(() => {
    getAdminDetails();
  });
  const getAdminDetails = () => {
    profiles.map((admin) => currEmail === admin.email && setCurrPerson(admin));
  };
  console.log("holaaa");
  console.log(currPerson);
  // cname, cdescription, email, phone, website, adrs, package, mincgpa, position;
  return (
    <div className="add-profile-box">
      {/* <ToastContainer position="bottom-center" /> */}
      <h2>{currPerson.aname}</h2>
      <form>
        <div className="add-placement-form">
          <p>Email</p>
          <p>{currPerson.email}</p>
        </div>
        <div className="add-placement-form">
          <p>Phone</p>
          <p>{currPerson.phone}</p>
        </div>
        <div className="add-placement-form">
          <p>DEP Name</p>
          <p>{currPerson.depname}</p>
        </div>
      </form>
    </div>
  );
}

export default AdminProfile;
