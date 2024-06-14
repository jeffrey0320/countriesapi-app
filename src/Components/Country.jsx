import React from "react";
import { useNavigate } from "react-router-dom";

const Country = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="countriesDiv">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      {data.map((country, index) => {
        return (
          <div className="card details" key={index}>
            <div className="imgDiv">
              <img
                src={country.flags.png}
                alt={country.name.common + ` flag`}
              />
            </div>
            <div className="countryInfo">
              <h2>{country.name.common}</h2>
              <div>
                <p>Native Name: {country.nativeName}</p>
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
