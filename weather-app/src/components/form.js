import React from "react";

const Form = () => {
  return (
    <div>
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
    </div>
  );
};

export default Form;
