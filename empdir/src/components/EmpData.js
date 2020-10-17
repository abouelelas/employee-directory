import React, { useContext } from "react";
// import "./DataBody.css"
import empDataContext from "../utils/empDataContext";

const EmpData = () => {
    const context = useContext(empDataContext);
    return (
        <tbody>
        {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
          context.developerState.filteredUsers.map(({ ID, Image, Name, Phone, Email, Location }) => {
            return (
              <tr key={ID}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={Image.medium}
                    alt={"profile image for " + Name.first + " " + Name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {Name.first} {Name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {Phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + Email} target="__blank">
                    {Email}
                  </a>
                </td>
                <td data-th="Location" className="align-middle">
                  {(Location)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default EmpData;

