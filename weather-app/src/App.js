import React from "react";
import Heading from "./components/heading";
import Form from "./components/form";
import Result from "./components/result";
import "./App.css";

class App extends React.Component {
  state = {
    displayResult: false
  };

  getResult = event => {
    event.preventDefault();
    this.setState({
      displayResult: true
    });
  };

  render() {
    return (
      <div className="card card--width-reduced shadow-lg p-3 mb-5 bg-white rounded">
        <Heading />
        <Form getResult={this.getResult} />
        <Result displayTrigger={this.state.displayResult} />
      </div>
    );
  }
}

export default App;
