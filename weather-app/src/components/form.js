import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.getResult}>
        <div className="form-group">
          <select
            name="country"
            className="countries custom-select"
            id="countryId"
          >
            <option value="">Select Country</option>
          </select>
          <select name="state" className="states custom-select" id="stateId">
            <option value="">Select State</option>
          </select>
          <select name="city" className="cities custom-select" id="cityId">
            <option value="">Select City</option>
          </select>
        </div>
        <button type="submit" className="btn submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
