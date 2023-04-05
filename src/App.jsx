import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Hero, Projects, Footer, DarkMode, Modal } from "./components";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Projects />
      <Footer />
      <DarkMode />
      <Modal />
    </Router>
  );
}

export default App;
