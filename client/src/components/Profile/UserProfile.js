import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useStateValue } from "../../Context/StateProvider";
import "./Profile.css";
function UserProfile({ companyName, description, email, website, address }) {
  const baseUrl = "http://localhost:3001";
  const [profiles, setProfiles] = useState([]);
  const [currPerson, setCurrPerson] = useState("");
  const [user, dispatchUser] = useStateValue();

  const getProfiles = () => {
    axios.get(`${baseUrl}/profile`).then((response) => {
      setProfiles(response.data);
    });
  };
  const currUSN = user.user[0].usn;
  //   const getPerson = user.data[0].usn;
  console.log("====================================");
  console.log(user.user[0].usn);
  console.log("====================================");
  console.log(profiles);

  useEffect(() => {
    getProfiles();
  }, []);
  useEffect(() => {
    currUserDetails();
  });
  const currUserDetails = () => {
    profiles.map((person) => currUSN === person.usn && setCurrPerson(person));
  };
  console.log("holaaa");
  console.log(currPerson);
  // cname, cdescription, email, phone, website, adrs, package, mincgpa, position;
  return (
    <div className="add-profile-box">
      {/* <ToastContainer position="bottom-center" /> */}
      <h2>{currPerson.sname}</h2>
      <form>
        <div className="add-placement-form">
          <p>USN</p>
          <p>{currPerson.usn}</p>
        </div>
        <div className="add-placement-form">
          <p>Email</p>
          <p>{currPerson.email}</p>
        </div>
        <div className="add-placement-form">
          <p>Phone</p>
          <p>{currPerson.mobile}</p>
        </div>
        <div className="add-placement-form">
          <p>CGPA</p>
          <p>{currPerson.cgpa}</p>
        </div>
        <div className="add-placement-form">
          <p>Branch</p>
          <p>{currPerson.branch}</p>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
