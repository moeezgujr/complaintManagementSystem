/**
 * @dev simple card
 * @props takes icons
 * @props two texts
 *  * @props image as props
 */
import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const IconCard = ({ text, count }) => {
  const classes = useStyles();
  return (
    <Box pt={3}>
      <Paper className={classes.paper}>
        <Box p={2} display="flex" alignItems="center">
          <Box pl={3}>
            <div>
              <Box>
                <Typography variant="h3" style={{ textTransform: "uppercase" }}>
                  {text}
                </Typography>
              </Box>
              <Box pt={1}>
                <Typography variant="h1">{count}</Typography>
              </Box>
            </div>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default IconCard;
const useStyles = makeStyles((theme) => ({
  iconSize: {
    width: "60px",
    height: "60px",
  },

  paper: {
    color: theme.palette.color.primary,
    backgroundColor: theme.palette.backgroundColor.main,
    // width: "275px",
    height: "100px",
    [theme.breakpoints.down("xs")]: {
      width: "275px",
    },
  },
}));
