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
import "./Placements.css";
import { FaPlus } from "react-icons/fa";
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

function Placements() {
  const classes = useStyles();
  const [placementsList, setPlacementsList] = useState([]);
  const baseUrl = "http://localhost:3001";
  //////////////////GET REQUEST TO SHOW/READ DATA//////////////
  const getPlacements = () => {
    Axios.get(`${baseUrl}/placements`).then((response) => {
      setPlacementsList(response.data);
    });
  };
  const addPlacement = () => {
    alert("hey");
  };
  useEffect(() => {
    getPlacements();
  });
  return (
    <div className="placements_page">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>
                Student Name
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Batch
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                CGPA
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Company
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Package
              </TableCell>

              <TableCell className={classes.tableHeading} align="left">
                Position
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placementsList.map((placement) => (
              <TableRow key={placement.id}>
                <TableCell
                  className={classes.tableData}
                  component="th"
                  scope="row"
                >
                  {placement.name}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.batch}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.cgpa}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.company}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.package}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.position}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div href="#" class="float" onClick={addPlacement}>
        <FaPlus className="my-float" />
      </div>
    </div>
  );
}

export default Placements;
