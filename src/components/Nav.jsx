import React from "react";
import logo from "../assets/images/me2.png";
import { HiOutlineLightBulb } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className='flex justify-between items-center my-0 mx-auto px-5 py-0 w-full max-w-6xl h-[15vh]'>
      <figure className=''>
        <img src={logo} alt='me!' className='rounded-full h-[50px] logo-anim' />
      </figure>
      <ul className='flex nav__link--list-anim'>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#'>About</a>
        </li>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='mx-3 font-bold subtitle__hover'>
          <a href='#'>
            Contact
          </a>
        </li>
        <li className='mx-2 -my-0.5 text-2xl subtitle__hover hover:scale-110 active:scale-90 transition-all'>
          <a href=''>
            <HiOutlineLightBulb />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
