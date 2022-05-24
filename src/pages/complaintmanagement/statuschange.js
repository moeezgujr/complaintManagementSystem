import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import axios from "../../axios";
export default function FormDialog({ open, close, id }) {
  const [status, setStatus] = React.useState("");
  const [reason, setReason] = React.useState("");

  const handleSubmit = () => {
    async function fecthData() {
      await axios
        .post(
          `complaintmanagment/update-status`,
          {
            ID: id,
            Status: status,
            Reason: reason,
          },
          {
            headers: {
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("user"))?.data?.uniqueToken
                  ?.token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
          }
        });
    }
    fecthData();
  };
  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={close}>
        <DialogTitle>Change Status</DialogTitle>
        <DialogContent>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Department"
            placeholder="Department"
            style={{ width: 300, marginTop: 10 }}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value={2}>Pending </MenuItem>
            <MenuItem value={3}>Approved </MenuItem>
            <MenuItem value={4}>Rejected </MenuItem>
            <MenuItem value={5}>Closed </MenuItem>
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(e) => setReason(e.target.value)}
            label="Reason to Change Status"
            fullWidth
            variant="standard"
          />
          {/* <InputLabel id="demo-simple-select-label">Department</InputLabel> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
