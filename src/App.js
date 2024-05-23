import "./App.css";
import moonLogo from "./moon-regular.svg";
import caretDown from "./arrow-down.png";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("HTTP error: Status ${response.status}");
        }
        let postsData = await response.json();
        setData(postsData);
      } catch (err) {
        setData(null);
      }
    };

    Fetch();
  }, []);

  function searchForCountry(country) {
    for (const i in data) {
      if (data[i].name.common.localeCompare(country)) {
        return data[i];
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
          <div className="card">
            <h1>Germany</h1>
            <p>Population: {searchForCountry("Germany").population}</p>
            <p>Region: {searchForCountry("Germany").region}</p>
            <p>Capital: </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
