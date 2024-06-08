import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Country = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="countriesDiv">
      <button
        onClick={() => {
          navigate(-2);
        }}
      >
        Back
      </button>
      {data.map((country, index) => {
        return (
          <div className="card" key={index}>
            <div className="imgDiv">
              <img
                src={country.flags.png}
                alt={country.name.common + ` flag`}
              />
            </div>
            <div className="countryInfo">
              <h2>{country.name.common}</h2>
              <div>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
