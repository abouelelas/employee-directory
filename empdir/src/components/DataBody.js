import React from "react";
import { MDBDataTable } from "mdbreact";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Form,
  Card,
  Table,
  Image,
} from 'react-bootstrap';
import "../styles/DataBody.css";
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










// import React, { useContext } from "react";
// import "../styles/DataBody.css"
// import EmpDataContext from "../utils/EmpDataContext";

// const DataBody = () => {
//     const context = useContext(EmpDataContext);
//     return (
//          <table>
//         {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
//           context.developerState.filteredUsers.map(({ ID, Image, Name, Phone, Email, Location }) => {
//             return (

//               <tr key={ID}>
//                 <td data-th="ID" className="align-middle">
//                   <img
//                     src={Image}
//                   className="img-responsive"
//                     alt={"profile image for " + Name }
//                   />
//                 </td>
//                 <td data-th="Name" className="name-cell align-middle">
//                   {Name}
//                 </td>
//                 <td data-th="Phone" className="align-middle">
//                   {Phone}
//                 </td>
//                 <td data-th="Email" className="align-middle">
//                   <a href={"mailto:" + Email} target="__blank">
//                     {Email}
//                   </a>
//                 </td>
//                 <td data-th="Location" className="align-middle">
//                   {(Location)}
//                 </td>
//               </tr>
//             );
//           })
//         ) : (
//           <></>
//         )}
//     </table>
//     );
//   }
  
//   export default DataBody;

