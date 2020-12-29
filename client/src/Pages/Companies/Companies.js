import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import "./Companies.css";
import { FaPlus } from "react-icons/fa";
import { Modal } from "@material-ui/core";
import AddCompany from "./AddCompany";
import { useStateValue } from "../../Context/StateProvider";
import CompanyDetails from "./CompanyDetails";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeading: {
    color: "white",
    background: "#323232",
    fontSize: 17,
  },
  tableData: {
    color: "white",
    background: "black",
    fontSize: 13,
    cursor: "pointer",
    // border: "0.01 px",
  },
  tableBack: {
    backgroundColor: "black",
  },
});

function Companies() {
  const classes = useStyles();
  const [companiesList, setCompaniesList] = useState([]);
  const baseUrl = "http://localhost:3001";

  const [open, setOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenCompany = () => {
    setOpenCompany(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCompany = () => {
    setOpenCompany(false);
  };
  const [{ admin }, dispatchAdmin] = useStateValue();

  //////////////////GET REQUEST TO SHOW/READ DATA//////////////
  const getCompanies = () => {
    Axios.get(`${baseUrl}/companies`).then((response) => {
      setCompaniesList(response.data);
    });
  };

  useEffect(() => {
    getCompanies();
  });

  return (
    <div className="companies_page">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>
                Company Name
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Website
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Package
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Eligibility(CGPA)
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Position
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companiesList.map((company) => {
              return (
                <TableRow key={company.id}>
                  <TableCell
                    className={classes.tableData}
                    component="th"
                    scope="row"
                    onClick={handleOpenCompany}
                  >
                    {company.cname}
                  </TableCell>
                  {companiesList.map((item) => {
                    companiesList[item] = company;
                    return (
                      <Modal
                        open={openCompany}
                        onClose={handleCloseCompany}
                        className="modal"
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        <CompanyDetails
                          companyName={item.cname}
                          description={company.cdescription}
                          email={company.email}
                          website={company.website}
                          address={company.adrs}
                        />
                      </Modal>
                    );
                  })}
                  <TableCell className={classes.tableData} align="left">
                    {company.website}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.package}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.mincgpa}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.position}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!admin || admin === "" ? null : (
        <>
          <div class="float" onClick={handleOpen}>
            <FaPlus className="my-float" />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            className="modal"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AddCompany />
          </Modal>
        </>
      )}
    </div>
  );
}

export default Companies;
