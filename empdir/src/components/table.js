import React, { useContext } from "react";
import EmpData from "./EmpData.js";
// import "../styles/DataTable.css";
import empDataContext from "../utils/empDataContext";

const tableSetUp = () => {
    const context = useContext(empDataContext);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        // context.handleSort(name.toLowerCase());
                                        context.handleSort(name);
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tableSetUp />
            </table>
        </div>
    );
}

export default tableSetUp;


// import React, {useContext} from 'react';
// import empDataContext from "../utils/empDataContext";
// const context = useContext(empDataContext);
// function tableSetUp(props) {

//     console.log(props.employees)
//     return (

//         <div> className="datatable mt-5">
//       <table className="table table-hover">
//         {/* id="table"
//         className="table table-striped table-hover table-condensed" */}

//         <thead>

//           <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">Image</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Phone</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Location</th>

//             context.developerState.headings.map(({ name, width }) => {
//               return (
//                 <th>
//                   className="col"
//                   key={name}
//                   style={{ width }}
//                   onClick={() => {
//                     // context.handleSort(name.toLowerCase());
//                     context.handleSort(name);
//                   }}


//             })}
//           </tr>
//         </thead>


//       </table>

//   );
// }

//     //         <table className="table table-hover">
//     //             <thead>

//     //                 <tr>
//     //                     <th scope="col">ID</th>
//     //                     <th scope="col">Image</th>
//     //                     <th scope="col">Name</th>
//     //                     <th scope="col">Phone</th>
//     //                     <th scope="col">Email</th>
//     //                     <th scope="col">Location</th>
//     //                 </tr>
//     //             </thead>
//     //             <tbody>

//     // <tr className="list-group">

//     // </tr>





//     //             </tbody>
//     //         </table>









// export default tableSetUp;