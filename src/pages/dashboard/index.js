import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
// import AssessmentIcon from "@material-ui/icons/Assessment";

import IconCard from "../../components/iconCard";
import TotalComplaints from "../../components/totalComplaints";
import Array from "../../components/arrays";
import { makeStyles } from "@material-ui/core";
import "material-react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "material-react-toastify";
import axios from "../../axios";
const Dashboard = () => {
  const [counts, setCounts] = useState("");
  const Array = [
    {
      text: "Total Complaints",
      count: counts?.total,
      // icon: order,
    },
    {
      text: "Pending Complaints ",
      count: counts?.pending,
      // icon: rca,
    },
    {
      text: "Closed Complaints",
      count: counts?.closed,
      // icon: nft,
    },
    {
      text: "Approved Complaints",
      count: counts?.approved,
      // icon: feature,
    },
  ];
  const classes = useStyles();
  useEffect(() => {
    async function fecthData() {
      await axios
        .get(
          `dashboard/webcomplaint-stats`,

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
            setCounts(res?.data);
            // navigate("/dashboard");
            // localStorage.setItem("user", JSON.stringify(res));
          }
        });
    }
    fecthData();
  }, []);
  return (
    <Box display="flex" pt={5} className={classes.bgColor}>
      <MiniDrawer />
      <ToastContainer />

      <Wrapper>
        {/* <Box className={classes.flexin}>
          <SearchBar />
          <Button variant="inline" endIcon={<AssessmentIcon />}>
            Report
          </Button>
        </Box> */}
        <div className={classes.grid}>
          {Array.map((items) => {
            return (
              <IconCard
                count={items.count}
                text={items.text}
                // icon={items.icon}
              />
            );
          })}
        </div>
        {/* <Box pt={5} pb={3}>
          <TotalComplaints />
        </Box>
        <Box pt={5} pb={3}>
          <TotalComplaints />
        </Box>
        <Box pt={5} pb={3}>
          <TotalComplaints />
        </Box>
        <Box pt={5} pb={3}>
          <TotalComplaints />
        </Box> */}
      </Wrapper>
    </Box>
  );
};

export default Dashboard;
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
