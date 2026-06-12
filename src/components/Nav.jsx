import React, { useContext } from "react";
import logo from "../assets/images/me2.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ThemeContext } from "../App";
import { ModalContext } from "../contexts/ModalContext";

const Nav = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleModalToggle = () => {
    setModal(modal === true ? false : true);
  };
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const linkClass =
    theme === "dark"
      ? "link__hover-effect--white link__hover-effect text-white"
      : "link__hover-effect--black link__hover-effect text-cDark";

  return (
    <nav
      className={`${
        modal ? "opacity-0 pointer-events-none" : ""
      } flex justify-between items-center my-0 mx-auto px-5 py-0 w-full max-w-6xl h-[15vh]`}
    >
      <figure>
        <img src={logo} alt='me!' className='rounded-full h-[50px] logo-anim' />
      </figure>
      <ul className='flex nav__link--list-anim'>
        <li className={`${linkClass} mx-3 font-bold subtitle__hover`}>
          <a href="#" onClick={handleModalToggle}>About</a>
        </li>
        <li className={`${linkClass} mx-3 font-bold subtitle__hover`}>
          <a href='#projects'>Projects</a>
        </li>
        <li className={`${linkClass} mx-3 font-bold subtitle__hover`}>
          <a href="#" onClick={handleModalToggle}>Contact</a>
        </li>
        <li
          className={`${linkClass} font-bold subtitle__hover mx-2 -my-0.5 text-2xl hover:scale-110
          active:scale-90 transition-all`}
        >
          <a href="#" onClick={handleThemeToggle}>
            <HiOutlineLightBulb />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
