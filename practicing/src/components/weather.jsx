import React from "react";

const Weather = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center fw-400 mt-4">Weather Application</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="karachi"
              />
              <label htmlFor="floatingInput">Enter City Name</label>
            </div>
          </div>
          <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-6 offset-md-3 text-center">
            <button className="btn btn-primary">Search</button>
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default Weather;
