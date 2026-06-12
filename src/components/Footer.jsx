import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import me from "../assets/images/me2.png";
import resume from "../assets/CHAYLIN_GOKAN_RESUME.pdf";

const Footer = () => {
  return (
    <footer className='bg-cDark text-white py-10 w-full'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <a href='#' className='footer__anchor'>
            <figure className='footer__logo'>
              <img src={me} className='footer__logo--img' alt='' />
            </figure>
            <span className='footer__logo--popper'>
              <BsFillArrowUpCircleFill />
              Top
            </span>
          </a>
          <ul className='w-full max-w-lg flex justify-around gap-6 mt-10 mb-0'>
            <li>
              <a
                href='https://github.com/cgok808'
                target='_blank'
                className='footer__social--link link__hover-effect link__hover-effect--white font-semibold'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/chaylin-gokan-83117a266/'
                target='_blank'
                className='footer__social--link link__hover-effect link__hover-effect--white font-semibold'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={resume}
                target='_blank'
                className='footer__social--link link__hover-effect link__hover-effect--white font-semibold'
              >
                Resume
              </a>
            </li>
          </ul>
          <p className='footer__copyright text-sm mt-6 opacity-60'>
            &copy; {new Date().getFullYear()} Chaylin Gokan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
