import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox {...props} />);

export default function CheckboxLabels() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        className={classes.formGroup}
        control={
          <GreenCheckbox
            className={classes.greenCheckbox}
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label="keep me signed in"
      />
    </FormGroup>
  );
}
const useStyles = makeStyles((theme) => ({
  formGroup: {
    color: theme.palette.color.main,

    "& .MuiFormControlLabel-label": {
      color: theme.palette.color.main,
    },
  },
  greenCheckbox: {
    color: theme.palette.color.main,
  },
}));
