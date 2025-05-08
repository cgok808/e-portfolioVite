import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import React, { useState } from "react";
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Home />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
