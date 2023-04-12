import React, { useContext } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { ThemeContext } from "../App";
import { MdMail } from "react-icons/md";
import { ModalContext } from "../contexts/ModalCotext";

const ContactBtn = ({ theme }) => {
  return (
    <button
      className={`${
        theme === "light" ? "dark" : "bg-white text-black"
      } h-[70px] w-[70px] text-3xl rounded-full border-none bg-[#242424] text-white fixed bottom-8 right-10 z-50 mail__btn flex justify-center items-center hover:scale-110 active:scale-90 transition-all`}
    >
      <MdMail />
    </button>
  );
};

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { modal, setModal } = useContext(ModalContext);
  const handleModalToggle = () => {
    setModal(modal === true ? false : true);
    window.scrollTo({top: 0, behavior: "smooth"})
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
            I'm <strong className='text-cOrange'> passionate learner </strong>
            with the biggest love for tech. This is my personal website to
            showcase my skills and interests :)
          </p>

          <p className='text-2xl leading-loose max-w-md header__para-secondary'>
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
        <div className={`${modal === false ? true : "modal--open"} modal`}>
          <div className='modal__half modal__about text-black'>
            <h3 className='text-3xl font-semibold'>Here's a bit about me.</h3>
            <h4 className='mt-[12px] mr-0 mb-[24px] ml-0 text-base'>
              Specific Interests:
              <br />
              <b className='text-cOrange'>
                Frontend Software Development and IT Support
              </b>
            </h4>
            <p className='modal__para'>
              I am currently pursuing a{" "}
              <b className='text-cOrange'>computer science</b> bachelor's degree
              from University of Colorado Boulder.
              <br /> I am <b className='text-cOrange'>
                programming enthusiast
              </b>{" "}
              and have always loved learning about{" "}
              <b className='text-cOrange'>computers</b>
              . I'm always on the lookout for new opportunities to learn and
              grow my skillset. <br /> I am currently on working side projects
              as of now, and you can check my{" "}
              <b className='text-cOrange'>technology stack</b> down below!
            </p>
            <div className='modal__languages'>
              <figure className='modal__language'>
                <img
                  className='modal__language--img'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png'
                  alt=''
                />
                <span className='language__name'>HTML</span>
              </figure>
              <figure className='modal__language'>
                <img
                  className='modal__language--img'
                  src='https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png'
                  alt=''
                />
                <span className='language__name'>CSS</span>
              </figure>
              <figure className='modal__language'>
                <img
                  className='modal__language--img'
                  src='https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png'
                  alt=''
                />
                <span className='language__name'>JavaScript</span>
              </figure>
              <figure className='modal__language'>
                <img
                  className='modal__language--img'
                  src='https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png'
                  alt=''
                />
                <span className='language__name'>React</span>
              </figure>
            </div>
          </div>
          <div className='modal__half modal__contact'>
            <i className='fas fa-times modal__exit click'></i>
            <h3 className='text-3xl font-semibold'>Let's have a chat!</h3>
            <h3 className='mt-[12px] mr-0 mb-[24px] ml-0 text-base'>
              I'm currently open to new opportunities.
            </h3>
            <form id='contact__form'>
              <div className='form__item'>
                <label className='form__item--label'>Name</label>
                <input
                  className='input'
                  name='user_name'
                  type='text'
                  required
                ></input>
              </div>
              <div className='form__item'>
                <label className='form__item--label'>Email</label>
                <input
                  className='input'
                  name='user_email'
                  type='email'
                  required
                ></input>
              </div>
              <div className='form__item'>
                <label className='form__item--label'>Message</label>
                <textarea
                  className='input'
                  name='message'
                  type='text'
                  required
                ></textarea>
              </div>
              <button id='contact__submit' className='form__submit'>
                Send it my way
              </button>
            </form>
            <div className='modal__overlay modal__overlay--loading'>
              <i className='fas fa-spinner'></i>
            </div>
            <div className='modal__overlay modal__overlay--success'>
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          </div>
        </div>
      </section>
      <a href='#' onClick={handleModalToggle}>
        <ContactBtn theme={theme} />
      </a>
    </>
  );
};

export default Hero;
