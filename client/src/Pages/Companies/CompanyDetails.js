// import { Modal } from "@material-ui/core";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "./CompanyDetails.css";
// function CompanyDetails({ id, openCompany, handleCloseCompany }) {
//   const baseUrl = "http://localhost:3001";
//   const [companiesList, setCompaniesList] = useState([]);
//   const [currCompany, setCurrCompany] = useState("");

//   const getCompanyDetails = () => {
//     axios.get(`${baseUrl}/companies`).then((response) => {
//       setCompaniesList(response.data);
//     });
//   };

//   const currCompanyDetails = () => {
//     companiesList.map(
//       (company) => id === company.id && setCurrCompany(company)
//     );
//   };
//   console.log(
//     "=====================LLLLLLLLLLAAAAAAAAALLLLLLLLLLAA==============="
//   );
//   console.log(companiesList);
//   console.log("====================================");
//   useEffect(() => {
//     getCompanyDetails();
//   }, []);
//   useEffect(() => {
//     currCompanyDetails();
//   }, []);

//   return (
//     <Modal
//       open={openCompany}
//       onClose={handleCloseCompany}
//       className="modal"
//       aria-labelledby="simple-modal-title"
//       aria-describedby="simple-modal-description"
//     >
//       <div className=" add-placement-box">
//         <ToastContainer position="bottom-center" />
//         <h2>{currCompany.cname}</h2>
//         <form>
//           <div className="add-placement-form">
//             <p>Company Info</p>
//             <p>{currCompany.cdescription}</p>
//           </div>
//           <div className="add-placement-form">
//             <p>Email</p>
//             <p>{currCompany.email}</p>
//           </div>
//           <div className="add-placement-form">
//             <p>Website</p>
//             <p>{currCompany.website}</p>
//           </div>
//           <div className="add-placement-form">
//             <p>Address</p>
//             <p>{currCompany.adrs}</p>
//           </div>
//         </form>
//       </div>
//     </Modal>
//   );
// }

// export default CompanyDetails;
