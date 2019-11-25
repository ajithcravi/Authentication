import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import Form from "./components/form";
import Result from "./components/result";
import "./App.css";
import key from "./private/keys";

class App extends React.Component {
  state = {
    displayResult: false
  };

  getResult = async event => {
    event.preventDefault();
    const country = event.target.elements.country.value;
    const state = event.target.elements.state.value;
    const city = event.target.elements.city.value;

    const fetchCountryCode = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    );
    const countryData = await fetchCountryCode.json();
    const countryCode = countryData[0].alpha2Code;

    const fetchWeather = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${country},${countryCode}&units=imperial&appid=${key.weather}`
    );
    const weatherData = await fetchCountryCode.json();

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
