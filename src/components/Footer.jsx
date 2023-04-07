import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import me from "../assets/images/me2.png";

const Footer = () => {
  const footerSocials = [
    { id: 1, name: "GitHub" },
    { id: 2, name: "LinkedIn" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Resume" },
  ];

  return (
    <footer>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <a href='#' className='footer__anchor'>
            <figure className='footer__logo'>
              <img src={me} className='footer__logo--img' alt='' />
            </figure>
            <span className='footer__logo--popper mr-7'>Top</span>
            <BsFillArrowUpCircleFill className='footer__logo--popper text-xl' />
          </a>
          <ul className='footer__social--list'>
            {footerSocials.map((social) => {
              return (
                <li key={social.id}>
                  <a
                    href=''
                    className='footer__social--link link__hover-effect link__hover-effect--white font-semibold'
                  >
                    {social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
