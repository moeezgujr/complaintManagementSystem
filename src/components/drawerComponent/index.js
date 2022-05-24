import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
  draw: {
    width: "100%",
  },
});

const DrawerComponent = ({ handleDrawerClose, openDrawer, setopenDrawer }) => {
  const classes = useStyles();

  return (
    <div>
      <MUIDrawer className={classes.drawer} anchor="right" open={openDrawer}>
        <List className={classes.draw}>
          <ChevronLeftIcon onClick={handleDrawerClose} />

          <ListItem button>
            <ListItemIcon>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconButton>
                <AccountCircleIcon />{" "}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </List>
      </MUIDrawer>
    </div>
  );
};

export default DrawerComponent;
