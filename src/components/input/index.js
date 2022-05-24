import { TextField, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    width: "380px",

    border: "none",

    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      border: "0.1px solid " + theme.palette.color.main,
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 20px",
      color: theme.palette.color.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}))(TextField);
