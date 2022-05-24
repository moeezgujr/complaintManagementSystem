import React from "react";
import clsx from "clsx";
import { Divider as MuiDivider, makeStyles } from "@material-ui/core";

const Divider = (props) => {
  const classes = useStyles();
  const { blueDivider, greenDivider, blackDivider, grayDivider } = props;
  return (
    <div
      className={clsx(classes.main, props.className, {
        [classes.blueDivider]: blueDivider,
        [classes.greenDivider]: greenDivider,
        [classes.blackDivider]: blackDivider,
        [classes.grayDivider]: grayDivider,
      })}
    >
      <MuiDivider />
    </div>
  );
};
export default Divider;
const useStyles = makeStyles((theme) => ({
  main: { backgroundColor: theme.palette.secondary.main },
  blueDivider: {
    margin: "0px 30px 0px 62px",
    borderRadius: "11px",
    backgroundColor: theme.border.default,
  },
  greenDivider: {
    width: "37px",
    height: "4px",
    borderRadius: "11px",
    backgroundColor: theme.border.default,
  },
}));
