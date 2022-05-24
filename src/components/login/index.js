import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React, { useState } from "react";
import Buttons from "../buttons";
import CheckboxLabels from "../checkbox";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import "material-react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "material-react-toastify";
import { SuccessMessage } from "../../common";
import { ErrorMessage } from "../../common";
export default function LoginSection() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const login = async () => {
    const request = await axios
      .post(`authentication/login-user`, {
        EmailAddress: email,
        password: password,
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          SuccessMessage("Login Successfull");
          navigate("/dashboard");
          localStorage.setItem("user", JSON.stringify(res));
        } else {
          ErrorMessage(res.data.message);
        }
      });
    // return request;
  };
  return (
    <Box mb={10} className={classes.mainContainer}>
      {/* <ToastContainer /> */}
      <Box pt={5} pb={1}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          Get Started
        </Typography>
      </Box>
      <Box pt={6} pb={2}>
        <TextField
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
      </Box>
      <Box pt={2} pb={3}>
        <TextField
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
      </Box>
      <Box mt={3}>
        {/* <Link to="/dashboard"> */}
        <Buttons
          className={classes.ButtonSignin}
          onClick={login}
          variant="signIn"
        >
          sign in
        </Buttons>
        {/* </Link> */}
      </Box>
      <Box mt={3}>
        <CheckboxLabels className={classes.Checkbox} />
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 600,
    height: 500,
    borderRadius: "8px",
    backgroundColor: theme.palette.backgroundColor.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  ButtonSignin: {
    textTransform: "capitalize",
    fontSize: 18,
    color: theme.palette.color.wolf,
    fontWeight: 500,
  },
  typo: {
    paddingRight: 20,
    fontSize: 36,
    fontweight: 500,
    color: theme.palette.color.main,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      fontweight: 500,
    },
  },
}));
