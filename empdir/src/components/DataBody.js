import React, { useContext } from "react";
import "../styles/DataBody.css"
import EmpDataContext from "../utils/EmpDataContext";

const EmpData = () => {
    const context = useContext(EmpDataContext);
    return (
        <tbody>
        {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
          context.developerState.filteredUsers.map(({ ID, Image, Name, Phone, Email, Location }) => {
            return (
              <tr key={ID}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={Image}
                    alt={"profile image for " + Name }
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {Name}
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

