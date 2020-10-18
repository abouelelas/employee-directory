import React from "react";
import Employee from "../src/components/Employee.js";
import "./styles/App.css";
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

function App() {
  return (
    <div className="App">
      <header className="Jumbotron">
        <h1>Staff Directory</h1>
      </header>
      <Employee />
    </div>
  );
}

export default App;