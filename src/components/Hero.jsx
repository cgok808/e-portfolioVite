import React, { useContext } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { ThemeContext } from "../App";
import { MdMail } from "react-icons/md";
import { ModalContext } from "../contexts/ModalContext";
import resume from "../assets/CHAYLIN_GOKAN_RESUME.pdf";

const ContactBtn = ({ theme }) => {
  return (
    <button
      className={`${
        theme === "light" ? "dark" : "bg-white black"
      } h-[70px] w-[70px] text-4xl rounded-full border-none bg-[#242424] text-white fixed bottom-8 right-10 z-50 mail__btn flex justify-center items-center hover:scale-110 active:scale-90 transition-all`}
    >
      <MdMail />
    </button>
  );
};

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { modal, setModal } = useContext(ModalContext);
const handleModalToggle = () => {
  setModal(prev => !prev); 
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <>
      <section
        id='hero'
        className={`${
          theme === "light" ? "dark" : "text-white"
        } transition-all header h-[90vh]`}
      >
        <div
          className={`${
            modal === false ? true : "hidden transition--all"
          } -mt-28`}
        >
          {/* xs is 48 px */}
          <h1 className='mb-3 text-left font-semibold leading-none text-5xl sm:text-9xl title'>
            Hello!
          </h1>
          <h1 className='text-9xl mb-3 text-left leading-none text-cOrange title'>
            <strong className='text-cOrange'>I'm Chaylin.</strong>
          </h1>
          {/* xs is 12 px */}
          <p className='text-2xl max-w-md leading-loose header__para'>
            This is just my website to showcase my{" "}
            <strong className='text-cOrange'>skills and projects</strong>!
          </p>

          <p className='text-2xl leading-loose max-w-md header__para'>
            <a href='#' onClick={handleModalToggle}>
              <strong className='text-cOrange font-extrabold'>
                Click here{" "}
              </strong>
              to learn more about me!
            </a>
          </p>
          <a
            href='#projects'
            className={` ${modal === false ? true : "opacity-0 hidden"} scroll`}
          >
            <div
              className={`${
                theme === "light" ? "dark" : "scroll__icon--white"
              } scroll__icon transition__ease hover:scale-110 active:scale-90 header__para-secondary`}
            ></div>
          </a>
          <ul className='mt-2 flex'>
            <li>
              <a
                href='https://www.linkedin.com/in/chaylin-gokan-83117a266/'
                target='_blank'
                className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
              >
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/cgok808'
                target='_blank'
                className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a
                href={resume}
                target='_blank'
                className='bg-cOrange text-white p-2 w-8 h-8 text-sm mr-3 flex justify-center items-center rounded-full header__para-secondary hover:scale-110 active:scale-90 transition-all'
              >
                <BsFileEarmarkPdfFill />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <a href='#' onClick={handleModalToggle}>
        <ContactBtn theme={theme} />
      </a>
    </>
  );
};

export default Hero;
