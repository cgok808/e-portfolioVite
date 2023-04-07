import React, { useContext } from "react";
import { Footer, Hero, Modal, Nav, Projects } from "../components";
import { ThemeContext } from "../App";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "light" ? "dark": "bg-[#242424]"} dark__mode`}>
      <Nav />
      <Hero />
      <Projects />
      <Footer />
      <Modal />
    </div>
  );
};

export default Home;
