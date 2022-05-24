import * as React from "react";
import MUIDataTable from "mui-datatables";
const columns = [
  {
    name: "firstName",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "emailAddress",
    label: "Email",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "cnic",
    label: "Cnic",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "departmentName",
    label: "Department Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "view",
    label: "Action",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
  filterType: "checkbox",
};

export default function DataTable({ tableData }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <MUIDataTable
        title={"User List"}
        data={tableData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
