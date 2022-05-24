import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LoginSection from "../../components/login";

function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box pt={5} pb={3}>
        <LoginSection />
      </Box>
    </Box>
  );
}

export default Login;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.backgroundColor.alpha,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
