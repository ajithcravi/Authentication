import React from "react";
import Heading from "./components/heading";
import Form from "./components/form";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <Form />
      </div>
    );
  }
}

export default App;
