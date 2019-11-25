import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import Form from "./components/form";
import Result from "./components/result";
import "./App.css";
import key from "./private/keys";

class App extends React.Component {
  state = {
    country: undefined,
    stateName: undefined,
    city: undefined,
    temperature: undefined,
    humidity: undefined,
    image: undefined,

    displayResult: false
  };

  getResult = async event => {
    event.preventDefault();
    const country = event.target.elements.country.value;
    const stateName = event.target.elements.state.value;
    const city = event.target.elements.city.value;

    const fetchCountryCode = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    );
    const countryData = await fetchCountryCode.json();
    const countryCode = countryData[0].alpha3Code;
    console.log(countryCode);

    const fetchWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=imperial&appid=${key.weather}`
    );
    const weatherData = await fetchWeather.json();
    console.log();

    console.log(weatherData);

    this.setState({
      displayResult: true
    });
  };

  render() {
    return (
      <div className="card card--width-reduced shadow-lg p-3 mb-5 bg-white rounded">
        <Heading />
        <Form getResult={this.getResult} />
        <Result result={this.state} />
      </div>
    );
  }
}

export default App;
