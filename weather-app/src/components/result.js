import React from "react";

const Result = () => {
  return (
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
  );
};

export default Result;
