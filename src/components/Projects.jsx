import React, { useContext } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import cryptoProject from "../assets/images/crypto-min.png";
import ePort from "../assets/images/e-port.png";
import library from "../assets/images/library.png";
import { ThemeContext } from "../App";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="projects" className="flex justify-center">
      <div className="container my-12">
        <div className="w-full max-w-5xl mx-auto px-3">
          <h1
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } text-center text-5xl mb-14 font-bold mt-28`}
          >
            Here are some of my <span className="text-cOrange">projects</span>
          </h1>

          <ul className="list-none p-0 m-0">
            {/* Project 1 */}
            <li className="mb-36">
              <div className="project__wrapper">
                <img src={library} alt="Library project" className="project__img" />
                <div className="project__wrapper--bg" />
                <div className="project__description">
                  <h3 className="project__description--title font-bold">
                    Library
                  </h3>
                  <h4 className="project__description--sub-title font-semibold text-3xl">
                    React | JavaScript
                  </h4>
                  <p className="project__description--para">
                    A responsive React e-commerce application displaying popular
                    and recommended books. Includes full e-commerce
                    functionality, mock API usage, and UX loading states.
                  </p>
                  <div className="project__description--links flex">
                    <a
                      href="https://github.com/cgok808/Library-Project-REACT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGithub className="text-2xl mr-3 transition__ease hover:scale-110 active:scale-90" />
                    </a>
                    <a
                      href="https://library-react-cgok.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiLink className="text-2xl transition__ease hover:scale-110 active:scale-90" />
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Project 2 */}
            <li className="mb-36">
              <div className="project__wrapper">
                <img
                  src={cryptoProject}
                  alt="Crypto tracker project"
                  className="project__img"
                />
                <div className="project__wrapper--bg" />
                <div className="project__description">
                  <h3 className="project__description--title font-bold">
                    Cryptocurrency Tracker
                  </h3>
                  <h4 className="project__description--sub-title font-semibold text-3xl">
                    React | Firebase | Material UI | Chart.js
                  </h4>
                  <p className="project__description--para">
                    A responsive cryptocurrency tracker featuring authentication,
                    watchlists, and real-time data powered by the CoinGecko API.
                  </p>
                  <div className="project__description--links flex">
                    <a
                      href="https://github.com/cgok808/CryptoTracker-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGithub className="text-2xl mr-3 transition__ease hover:scale-110 active:scale-90" />
                    </a>
                    <a
                      href="https://cryptotracker-chay.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiLink className="text-2xl transition__ease hover:scale-110 active:scale-90" />
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Project 3 */}
            <li className="mb-36">
              <div className="project__wrapper">
                <img src={ePort} alt="E-Portfolio project" className="project__img" />
                <div className="project__wrapper--bg" />
                <div className="project__description">
                  <h3 className="project__description--title font-bold">
                    E-Portfolio Template
                  </h3>
                  <h4 className="project__description--sub-title font-semibold text-3xl">
                    HTML | CSS | JavaScript
                  </h4>
                  <p className="project__description--para">
                    A responsive multi-platform portfolio built using semantic
                    HTML5 and BEM-styled CSS. Client data replaced for privacy.
                  </p>
                  <div className="project__description--links flex">
                    <a
                      href="https://github.com/cgok808/E-Portfolio-Example"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGithub className="text-2xl mr-3 transition__ease hover:scale-110 active:scale-90" />
                    </a>
                    <a
                      href="https://cgok808.github.io/E-Portfolio-Example/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiLink className="text-2xl transition__ease hover:scale-110 active:scale-90" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
