import React from "react";
import caretDown from "../arrow-down.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({
  inputValue,
  setInputValue,
  country,
  setCountry,
  region,
  setRegion,
  filteredItems,
  setFilteredItems,
}) => {
  const [data, setData] = useState([]);
  const [showRegions, setShowRegions] = useState(false);
  const navigate = useNavigate();

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
  /*
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}`,
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const fetchedData = await response.json();
          setFilteredItems(fetchedData);
          //navigate(`/${region}`);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      if (region) {
        fetchData();
      }
    }, [region]);*/

  function handleFilterBtn() {
    setShowRegions(!showRegions);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${inputValue}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigate(`/${inputValue}`);
      const fetchedData = await response.json();
      setCountry(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleFilter = async (e) => {
    setRegion(e.target.outerText);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${e.target.outerText}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setFilteredItems(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    navigate(`/${e.target.outerText}`);
  };

  const clickCard = async (country) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setCountry(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    navigate(`/${country}`);
  };

  return (
    <>
      <div className="searchFilter">
        <form onSubmit={handleOnSubmit}>
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
              <ul>
                <li onClick={handleFilter}>Africa</li>
                <li onClick={handleFilter}>Asia</li>
                <li onClick={handleFilter}>Americas</li>
                <li onClick={handleFilter}>Europe</li>
                <li onClick={handleFilter}>Oceania</li>
              </ul>
            </div>
          )}
        </div>
        <div className="countriesDiv">
          {data.map((country, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => {
                  clickCard(country.name.common);
                }}
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
      </div>
    </>
  );
};

export default Home;
