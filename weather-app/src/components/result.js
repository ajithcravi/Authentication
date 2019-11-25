import React from "react";

const Result = props => {
  return (
    <div>
      {props.result.displayResult && (
        <div className="card mb-3 resultCard">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={props.result.image}
                className="card-img card-img--corner-round"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body card-body--margin">
                <h5 className="card-title">
                  <b>
                    {props.result.city}, {props.result.stateName},
                    {props.result.country}
                  </b>
                </h5>
                <p className="card-text">
                  Temperature: <b>{props.result.temperature}&#176;F</b>
                </p>
                <p className="card-text">
                  Humidity: <b>{props.result.humidity}%</b>
                </p>
                <p className="card-text">
                  Weather: <b>{props.result.description}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
