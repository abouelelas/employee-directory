import React from "react";
import { MDBDataTable } from "mdbreact";

import "../styles/EmployeeStyle.css";
const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 500,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 300,
      }
    ],
    rows:props.employees
  };
  console.log("Props", props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;











