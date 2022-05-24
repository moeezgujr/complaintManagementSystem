import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Button from "../buttons";
import BasicTable from "../table";
const columns = [
  "id",
  " complaint",
  // "total items",
  // ,
  "created at",
  "Action",
];

const clients = ["1", "this is complaints", "12/4/2020"];
const rows = [clients, clients];

const TotalComplaints = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) =>
        col.type ? (
          <TableCell className={classes.col}>
            <img src={`${col.src}`} />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}

      <TableCell>
        <Button className={classes.btnview} variant="outline">
          view{" "}
        </Button>{" "}
        <Button variant="contain">delete</Button>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName="orders" head={head} body={body} />;
};
export default TotalComplaints;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  col: {
    color: theme.palette.color.primary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
