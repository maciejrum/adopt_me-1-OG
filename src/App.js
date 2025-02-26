import {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./components/ThemeContext";
import "./App.css";

function App() {
    const theme = useState("green")
    // const theme2 = useState("red")

  return (
      <ThemeContext.Provider value={theme}>
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
      </ThemeContext.Provider>
  );
}

export default App;
