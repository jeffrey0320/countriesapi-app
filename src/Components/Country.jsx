import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrow from "../arrow-left-solid.svg";

const Country = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="backBtnDiv">
        <button
          className="backButton"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={leftArrow} />
          Back
        </button>
      </div>
      <div className="countriesDiv">
        {data.map((country, index) => {
          return (
            <div
              className={data.length > 1 ? "card" : "card details"}
              key={index}
            >
              <div className="imgDiv">
                <img
                  src={country.flags.png}
                  alt={country.name.common + ` flag`}
                />
              </div>
              <div className="countryInfo">
                <h3>{country.name.common}</h3>
                <div className="data">
                  <span>
                    <strong>Population: </strong>{" "}
                    {country.population.toLocaleString()}
                  </span>
                  <span>
                    <strong>Region:</strong> {country.region}
                  </span>
                  <span>
                    <strong>Capital:</strong> {country.capital}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Country;
