import React,{ Component } from 'react';
import './App.css';
import TableSetUp from "./components/DataTable/DataTable"
 import Nav from "./components/Nav.js";
import DataArea from "./components/DataArea";
import SearchName from "./components/SearchName";
function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchName/>
      <TableSetUp/>
      <DataArea/>
     
      
    </div>
  );
}

export default App;
// function getUsers() {

//   return Axios.get("https:randomuser.me/api/?results=200&nat=us")
// }
// class App extends Component {
//   state = { employees: [] }

//   componentDidMount() {
//     console.log("Component Mounted");
//     getUsers().then((data) => {
//       this.setState({ employees: data.data })
//     });

//   }

//   render() {
//     console.log(this.state.employees);
//     return (
//       <div className="App">
//         <header>
//           <h1>Employee Directory</h1>
//           <p>Click on each heading to filter or use the search box to narrow your results</p>
//         </header>
//         <Table employees={this.state.employees}>  </Table>
//       </div>
//     );
//   }

// }


// export default App;
