import React from "react";
import Heading from "./components/heading";
import Form from "./components/form";
import Result from "./components/result";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="card card--width-reduced shadow-lg p-3 mb-5 bg-white rounded">
        <Heading />
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
