import * as React from "react";
import MUIDataTable from "mui-datatables";
const columns = [
  {
    name: "fullName",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "address",
    label: "Address",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "cnic",
    label: "CNIC",
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
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "postalCode",
    label: "PostalCode",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "complaintType",
    label: "Complaint Type",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "view",
    label: "Action Type",
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
        title={"Complaint List"}
        data={tableData}
        columns={columns}
        // options={options}
      />
    </div>
  );
}
