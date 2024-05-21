import "./App.css";
import moonLogo from "./moon-regular.svg";

function App() {
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
        <div>
          <button className="filterBtn">Filter by Region</button>
        </div>
      </div>
    </>
  );
}

export default App;
