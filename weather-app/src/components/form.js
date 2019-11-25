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
            className="form-control"
            id="location"
            aria-describedby="emailHelp"
            placeholder="e.g. Chennai"
          />
        </div>
        <button type="submit" className="btn submitButton">
          Submit
        </button>
      </form>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
    </div>
  );
};

export default Form;
