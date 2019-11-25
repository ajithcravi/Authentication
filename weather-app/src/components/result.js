import React from "react";

const Result = props => {
  return (
    <div>
      {props.result.displayResult && (
        <div className="card mb-3 resultCard">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={props.result.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {props.result.city},{props.result.stateName},
                  {props.result.country}
                </h5>
                <p className="card-text">
                  Temperature: {props.result.temperature}
                </p>
                <p className="card-text">Humidity: {props.result.humidity}</p>
                <p className="card-text">Weather: {props.result.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
