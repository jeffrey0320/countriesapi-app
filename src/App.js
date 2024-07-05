import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Country from "./Components/Country";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              inputValue={inputValue}
              setInputValue={setInputValue}
              country={country}
              setCountry={setCountry}
              region={region}
              setRegion={setRegion}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
            />
          }
        />

        <Route path="/:country" element={<Country data={country} />} />

        <Route path="/:region" element={<Country data={filteredItems} />} />
      </Routes>
    </>
  );
}

export default App;
