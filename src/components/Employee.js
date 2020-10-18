import React from "react";
import axios from "axios";
import DataBody from "./DataBody";

// import "../styles.EmployeeStyle.css";


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





