import React from "react";
import moonLogo from "../moon-regular.svg";
import caretDown from "../arrow-down.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [showRegions, setShowRegions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //const [filteredItems, setFilteredItems] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      if (!inputValue) return;

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${inputValue}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setCountry(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    console.log(country);
  }, [inputValue]);

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
    console.log(searchForCountry(inputValue));
  }

  function handleFilter() {}

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
        <form>
          <input
            className="search"
            type="text"
            value={inputValue}
            placeholder="Search for a country..."
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </form>
        <div className="filterDiv">
          <button className="filterBtn" onClick={handleFilterBtn}>
            Filter by Region <img src={caretDown} />
          </button>
          {showRegions && (
            <div className="regionsDiv">
              <p onClick={handleFilter}>Africa</p>
              <p>America</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          )}
        </div>
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
      </div>
      )
    </>
  );
};

export default Home;
