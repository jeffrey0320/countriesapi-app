import React from "react";
import caretDown from "../arrow-down.png";
import { useEffect, useState } from "react";
import { Link, useNavigate, withRouter } from "react-router-dom";

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
        //navigate(`/${region}`);
        const fetchedData = await response.json();
        setFilteredItems(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);*/

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

  const handleFilter = async (region) => {
    setRegion(region);
    navigate(`/${region}`);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      //navigate(`/${region}`);
      const fetchedData = await response.json();
      setFilteredItems(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
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
              <p onClick={handleFilter("Africa")}> Africa</p>
              <p onClick={handleFilter("Americas")}>Americas</p>
              /*
              <Link
                onClick={() => {
                  setRegion("Asia");
                }}
                to={"/Asia"}
              >
                <p onClick={handleFilter}>Asia</p>
              </Link>
              <Link
                onClick={() => {
                  setRegion("Europe");
                }}
                to={"/Europe"}
              >
                <p onClick={handleFilter}>Europe</p>
              </Link>
              <Link
                onClick={() => {
                  setRegion("Oceania");
                }}
                to={"/Oceania"}
              >
                <p onClick={handleFilter}>Oceania</p>
              </Link>
              */
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
    </>
  );
};

export default Home;
