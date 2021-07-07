import { Modal } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useStateValue } from "../../Context/StateProvider";
import AddPlacement from "./AddPlacement";
import "./Placements.css";

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   /* eslint-disable */
  const [{ admin }, dispatchAdmin] = useStateValue();

  //////////////////GET REQUEST TO SHOW/READ DATA//////////////
  const getPlacements = () => {
    Axios.get(`${baseUrl}/placements`).then((response) => {
      setPlacementsList(response.data);
    });
  };

  useEffect(() => {
    getPlacements();
  }, [placementsList]);
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
                USN
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Batch
              </TableCell>

              <TableCell className={classes.tableHeading} align="left">
                Company
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Salary
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
                  {placement.sname}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.usn}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.batch}
                </TableCell>
                <TableCell className={classes.tableData} align="left">
                  {placement.cname}
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
            <AddPlacement isOpen={handleOpen} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default Placements;
