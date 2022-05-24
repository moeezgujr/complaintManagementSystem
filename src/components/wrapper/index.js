import React from "react";
import { makeStyles } from "@material-ui/core";
/**
 * @dev Wrapper is container with holds data
 * @props Children takes only

 */
const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wraped}>{children}</div>;
};

export default Wrapper;
const useStyles = makeStyles((theme) => ({
  wraped: {
    width: "100%",
    padding: " 0 70px 0 40px",
    paddingTop: "3px",
    // margin: "0 20px",
    [theme.breakpoints.down("xs")]: {
      // margin: "0 10px",
      padding: " 0 10px 0 10px",
    },
  },
}));
