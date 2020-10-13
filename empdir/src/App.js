import React, {Component} from 'react';
import './App.css';
import Table from "./components/table.js";
import Axios from 'axios';
function getUsers (){
  
return Axios.get(https://randomuser.me/api/?results=200&nat=us)
}
class App extends Component {
  state = {employees: getUsers}
  render (){
    return (
      <div className="App">
        <header>
          <h2>Employee Directory</h2>
        </header>
        <Table> </Table>
      </div>
    );
  }
}

export default App;
