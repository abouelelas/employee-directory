import React from "react";
import axios from "axios";
import DataBody from "./DataBody";
import EmployeeStyle from "../styles/Employee.css";


class Employee extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((records) => {
        let empdata = records.data.results;
        let employeeRecordstemp = [];
        console.log(empdata)
        for (let i = 0; i < empdata.length; i++) {
          let employee = {
            image:<img src={empdata[i].picture.medium}></img> ,
            name: empdata[i].name.first + " " + empdata[i].name.last,
            email: empdata[i].email,
            phone: empdata[i].cell,
            location: empdata[i].location.city,
          };
          employeeRecordstemp.push(employee);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <DataBody employees={this.state.employeeRecords} />>
      </div>
    );
  }
}

export default Employee;





// import React, { useContext } from "react";
// import DataBody from "./DataBody";
// import "../styles/DataTable.css";
// import EmpDataContext from "../utils/EmpDataContext";

// const DataTable = () => {
//     const context = useContext(EmpDataContext);

//     return (

//         <div className="datatable mt-5">
//             <table
//                 id="table"
//                 className="table table-striped table-hover table-condensed"
//             >
//                 <thead>
//                     <tr>
                   
//                         {context.developerState.headings.map(({ name, width }) => {
//                             return (
//                                 <th
//                                     className="col"
//                                     key={name}
//                                     style={{ width }}
//                                     onClick={() => {
//                                         context.handleSort(name.toLowerCase());
//                                     }}
//                                 >
//                                     {name}
//                                     <span className="pointer"></span>
//                                 </th>
//                             );
//                         })}
//                     </tr>
//                 </thead>
//                 <DataTable data={this.state.filteredUsers} />
//                 <DataBody />
                
//             </table>
//         </div>
//     );
// }

// export default DataTable;
