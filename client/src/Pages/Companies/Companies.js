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
  },
  tableBack: {
    backgroundColor: "black",
  },
});

function Companies() {
  const classes = useStyles();
  const [companiesList, setCompaniesList] = useState([]);
  const baseUrl = "http://localhost:3001";
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
                Salary
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
            {companiesList.map((company) => (
              <TableRow key={company.id}>
                <TableCell
                  className={classes.tableData}
                  component="th"
                  scope="row"
                >
                  {company.name}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {company.website}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {company.salary}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {company.eligibility}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {company.position}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Companies;
