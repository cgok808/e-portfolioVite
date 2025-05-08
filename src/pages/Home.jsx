import React, { useContext } from "react";
import { Footer, Hero, Modal, Nav, Projects } from "../components";
import { ThemeContext } from "../App";
import { ModalContext } from "../contexts/ModalCotext";
import { useState } from "react";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <div
        className={`${theme === "light" ? "dark" : "bg-[#242424]"} dark__mode`}
      >
        <Nav />
        <Hero />
        <Projects />
        <Footer />
        <Modal />
      </div>
    </ModalContext.Provider>
  );
};

export default Home;
