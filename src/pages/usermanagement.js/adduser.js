import React, { useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import { Label } from "@material-ui/icons";
import { ErrorMessage, SuccessMessage } from "../../common";
import { useSelector } from "react-redux";
// import { set } from "immer/dist/internal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  // let { id } = useParams();

  // const { user } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (id) {
  //     setUserName(user?.username);
  //     setEmail(user.emailAddress);
  //     setCNIC(user.cnic);
  //   }
  // }, [user]);
  const classes = useStyles();
  // create state variables for each input
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostCode] = useState("");
  const [description, setDescription] = useState("");
  const [selecteddept, setSelectedDept] = useState("");
  const [base64, setBase64] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [lastName, SetLastName] = useState("");

  const [cnic, setCNIC] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSelectedDept(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const request = await axios
      .post(`authentication/register-user`, {
        FirstName: fullname,
        LastName: lastName,
        // Address: address,
        // PostalCode: postalCode,
        CNIC: cnic,
        // Description: description,
        // ComplaintType: parseInt(complaint),
        Phone: phone,
        // ImageBase64: base64,
        EmailAddress: email,
        UserName: userName,
        Password: password,
        UserRoleID: 2,
        DepartmentId: selecteddept,
      })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          SuccessMessage("User Registered Successfully");
          // setAddress("");
          setCNIC("");
          // setComplaintType("");
          // setDescription("");
          setPhone("");
          setEmail("");
          // setPostCode("");
          setPassword("");
          SetLastName("");
          setFullName("");
          setUserName("");
          setSelectedDept("");
        } else {
          ErrorMessage(res?.data?.message);
        }
      });
    // return request;
  };
  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  const handleFile = (e) => {
    getBase64(e.target.files[0]);
  };
  return (
    <Box display="flex" pt={0} className={classes.bgColor}>
      <MiniDrawer />
      <Wrapper>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Box>
            <TextField
              label="First Name"
              variant="filled"
              required
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={lastName}
              onChange={(e) => SetLastName(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="User Name"
              variant="filled"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              label="CNIC"
              variant="filled"
              required
              value={cnic}
              onChange={(e) => setCNIC(e.target.value)}
            />
            <TextField
              label="Phone"
              variant="filled"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>

          <Box>
            <TextField
              label="Password"
              variant="filled"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </Box>
          <Box>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selecteddept}
              label="Department"
              placeholder="Department"
              style={{ width: 300, marginTop: 10 }}
              onChange={handleChange}
            >
              <MenuItem value={1}>Sewerage </MenuItem>
              <MenuItem value={2}>Street Lightning</MenuItem>
              <MenuItem value={3}>Damaged Roads</MenuItem>
            </Select>
          </Box>
          <Box>
            {/* <Label>m</Label> */}
            {/* <h1>mm</h1> */}
            {/* <TextField
              // label="PostalCode"
              variant="filled"
              required
              type="file"
              // value={postalCode}
              onChange={(e) => handleFile(e)}
            /> */}
          </Box>

          <div>
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Wrapper>
    </Box>
  );
};

export default Form;
