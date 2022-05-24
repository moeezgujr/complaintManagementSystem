import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
import axios from "../../axios";
// import AssessmentIcon from "@material-ui/icons/Assessment";

import IconCard from "../../components/iconCard";
import TotalComplaints from "../../components/totalComplaints";
import Array from "../../components/arrays";
import { makeStyles } from "@material-ui/core";
import UserTable from "./usertable";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../Redux-Toolkit/user";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "../../common";

const Userlist = () => {
  const [users, setUserList] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const gotouser = () => {
    navigate("/adduser");
  };
  const openEditPage = (e) => {
    navigate(`/edituser/${e?.id}`);
    dispatch(storeUser(e));
  };
  const Delete = async (e) => {
    const request = await axios
      .put(
        `usermanagment/update-user`,
        {
          ...e,
          isDelete: true,
          userRoleID: 2,
        },
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
        if (res.data.statusCode === 200) {
          setUserList(users?.filter((i) => i.id !== e?.id));
          ErrorMessage("Deleted Successfully");
        } else {
          ErrorMessage("Error");
        }
      });
    // navigate(`/edituser/${e?.id}`);
    // dispatch(storeUser(e));
  };
  useEffect(() => {
    async function fecthData() {
      await axios
        .get(
          `usermanagment/users-list`,

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
            setUserList(
              res.data?.data.map((e) => {
                return {
                  ...e,
                  view: (
                    <>
                      <Button
                        style={{
                          backgroundColor: "#319CFF",
                          color: "white",
                          padding: 2,
                          cursor: "pointer",
                        }}
                        variant="outline"
                        onClick={() => openEditPage(e)}
                      >
                        Edit
                      </Button>

                      <Button
                        style={{
                          backgroundColor: "Red",
                          color: "white",
                          padding: 2,
                          cursor: "pointer",
                        }}
                        variant="outline"
                        onClick={() => Delete(e)}
                      >
                        Delete
                      </Button>
                    </>
                  ),
                };
              })
            );
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
      <Wrapper>
        <Button
          style={{ backgroundColor: "#319CFF", color: "white" }}
          onClick={gotouser}
        >
          Add User
        </Button>
        <Box pt={5} pb={3}>
          {<UserTable tableData={users} />}
        </Box>
        {/* <Box pt={5} pb={3}>
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

export default Userlist;
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
