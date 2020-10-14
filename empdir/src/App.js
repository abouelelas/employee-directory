import React, { Component } from 'react';
import './App.css';
import Table from "./components/table.js";
import Axios from 'axios';
function getUsers(){

  return Axios.get("https:randomuser.me/api/?results=200&nat=us")
}
class App extends Component {
  state = { employees: [] }

  componentDidMount() {
    console.log("Component Mounted");
    getUsers().then((data) => {
      this.setState({employees: data.data})
    });
    
  }

  render() {
    console.log(this.state.employees);
    return (
      <div className="App">
        <header>
          <h2>Employee Directory</h2>
        </header>
        <Table employees = {this.state.employees}>  </Table>
      </div>
    );
  }
  
}


export default App;
