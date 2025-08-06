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
        <div className='max-w-7xl mx-auto px-4'> 
          <Nav />
          <Hero />
          <Projects />
          <Footer />
          <Modal />
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export default Home;
