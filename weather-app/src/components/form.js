import React from "react";

const Form = () => {
  return (
    <div className="card card--width-reduced shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Weathy</h1>
      <h5>The weather app</h5>
      <form>
        <div className="form-group">
          <label for="location">Location</label>
          <input
            name="location"
            type="text"
            className="form-control inputBox--border-round"
            id="location"
            aria-describedby="emailHelp"
            placeholder="e.g. Chennai"
          />
        </div>
        <button type="submit" className="btn submitButton">
          Submit
        </button>
      </form>
      <div className="card mb-3 resultCard">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="..." className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Temperature:</p>
              <p className="card-text">Humidity:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
