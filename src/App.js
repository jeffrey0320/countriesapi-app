import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Country from "./Components/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
    </Routes>
  );
}

export default App;
