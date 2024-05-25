import "./App.css";
import moonLogo from "./moon-regular.svg";
import caretDown from "./arrow-down.png";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [showRegions, setShowRegions] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  function handleFilterBtn() {
    setShowRegions(!showRegions);
  }

  function handleSearch(e) {
    setInputValue(e.target.value);
    searchForCountry(e.target.value);
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
          value={inputValue}
          onChange={handleSearch}
        />
        <div className="filterDiv">
          <button className="filterBtn" onClick={handleFilterBtn}>
            Filter by Region <img src={caretDown} />
          </button>
          {showRegions && (
            <div className="regionsDiv">
              <p>Africa</p>
              <p>America</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          )}
        </div>
        <div className="countriesDiv">
          {data.map((country) => {
            return (
              <div className="card">
                <div className="imgDiv">
                  <img src={country.flags.png} />
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
      </div>
    </>
  );
}

export default App;
