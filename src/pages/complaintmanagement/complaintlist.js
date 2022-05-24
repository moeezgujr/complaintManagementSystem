import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
// import AssessmentIcon from "@material-ui/icons/Assessment";
import { makeStyles } from "@material-ui/core";
import ComplaintTable from "./complainttable";
import axios from "../../axios";
import { config } from "../../common";
import FormDialog from "./statuschange";
const Complaintlist = () => {
  const [complaints, setComplaintList] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);
  const close = () => {
    setOpen(false);
  };
  // console.log(config);
  const openStatus = (e) => {
    setOpen(true);
    setId(e);
  };
  useEffect(() => {
    async function fecthData() {
      await axios
        .get(
          `complaintmanagment/webcomplaint-list?status=1`,

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
            setComplaintList(
              res?.data?.complainData?.map((e) => {
                return {
                  ...e,
                  view: (
                    <Button
                      onClick={() => openStatus(e.id)}
                      style={{ background: "Red", color: "white" }}
                    >
                      Change Status
                    </Button>
                  ),
                };
              })
            );
          }
        });
    }
    fecthData();
  }, []);
  const classes = useStyles();
  return (
    <Box display="flex" pt={5} className={classes.bgColor}>
      <MiniDrawer />
      <FormDialog open={open} close={close} id={id} />
      <Wrapper>
        <Button
          style={{ backgroundColor: "#319CFF", color: "white" }}
          // onClick={gotouser}
        >
          Add Complaint
        </Button>

        <Box pt={5} pb={3}>
          <ComplaintTable tableData={complaints} />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Complaintlist;
const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "10px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  flexin: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  bgColor: {
    backgroundColor: theme.palette.backgroundColor.bgColor,
  },
}));
