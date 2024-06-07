import React from "react";

const Country = ({ data }) => {
  return (
    <div className="countriesDiv">
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
