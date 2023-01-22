import React from "react";
import axios from "axios";
import { useState } from "react";

let baseUrl = "";
if (window.location.href.split(":")[0] === "http") {
  baseUrl = "http://localhost:5000";
}
const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    axios
      .get(`${baseUrl}/weather/${weatherData}`)
      .then((response) => {
        let allData = [];
        allData.push(response.data);
        setData(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                value={weatherData}
                onChange={(e) => {
                  setWeatherData(e.target.value);
                }}
              />
              <label htmlFor="floatingInput">Enter City Name</label>
            </div>
          </div>
          <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-6 offset-md-3 text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            {data?.map((data, index) => {
              return (
                <div key={index}>
                  <h2>City: {data.city}</h2>
                  <h2>Min: {data.min}%</h2>
                  <h2>Max: {data.max}%</h2>
                  <h2>Humidity: {data.humidity}%</h2>
                  <h2>Postal Code: {data.postalCode}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
