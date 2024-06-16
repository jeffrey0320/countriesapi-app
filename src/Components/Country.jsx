import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrow from "../arrow-left-solid.svg";

const Country = ({ data }) => {
  const navigate = useNavigate();
  console.log(data.length);
  return (
    <div className="countriesDiv">
      <button
        className="backButton"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={leftArrow} />
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
