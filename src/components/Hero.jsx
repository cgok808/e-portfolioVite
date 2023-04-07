import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Hero = () => {
  return (
    <header id='hero' className='header'>
      <div className='-mt-28'>
        {/* xs is 48 px */}
        <h1 className='mb-3 text-left font-semibold leading-none text-5xl sm:text-9xl title'>
          Hello!
        </h1>
        <h1 className='text-9xl mb-3 text-left leading-none text-cOrange title'>
          <strong className='text-cOrange'>I'm Chaylin.</strong>
        </h1>
        {/* xs is 12 px */}
        <p className='text-2xl max-w-md leading-loose header__para'>
          I'm <strong className='text-cOrange'> passionate learner </strong>
          with the biggest love for tech. This is my personal website to
          showcase my skills and interests :)
        </p>

        <p className='text-2xl leading-loose max-w-md header__para-secondary'>
          <a href=''>
            <strong className='text-cOrange font-extrabold'>Click here </strong>
            to learn more about me!
          </a>
        </p>
        <a href='#projects' className='scroll'>
          <div className='scroll__icon transition__ease hover:scale-110 active:scale-90 header__para-secondary'></div>
        </a>
        <ul className='mt-2 flex'>
          <li>
            <a
              href='#'
              className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
            >
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
            >
              <BsFileEarmarkPdfFill />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;
