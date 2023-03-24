import "./App.css";
import AddCities from "./components/AddCities";
import Cities from "./components/Cities";
import Countries from "./components/Countries";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
