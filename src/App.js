import "./App.css";
import moonLogo from "./moon-regular.svg";
import caretDown from "./arrow-down.png";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  function searchForCountry(country) {
    for (const i of data) {
      if (data[i] === country) {
        return i;
      }
    }
  }

  return (
    <>
      <div className="navbar">
        <p className="logoP">Where in the world?</p>
        <div className="colorMode">
          <button className="modeBtn">
            <img src={moonLogo} />
          </button>
          <p>Dark Mode</p>
        </div>
      </div>
      <div className="searchFilter">
        <input
          className="search"
          type="text"
          placeholder="Search for a country..."
        />
        <div className="filterDiv">
          <button className="filterBtn">
            Filter by Region <img src={caretDown} />
          </button>
        </div>
        <div className="countriesDiv">
          {data.map((country) => {
            return (
              <div className="card">
                <div className="imgDiv">
                  <img src={country.flags.png} />
                </div>
                <div className="countryInfo">
                  <h1>{country.name.common}</h1>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
