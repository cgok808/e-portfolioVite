import React, { useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalCotext";
import { ImCross } from "react-icons/im";
import { CgSpinnerTwo } from "react-icons/cg";
import emailjs from "@emailjs/browser";

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);
  const handleModalToggle = () => {
    setModal(modal === true ? false : true);
  };

  // EMAIL JS

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then((result) => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch((error) => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on chaylin808@gmail.com"
        );
      });
    form.current.reset();
  };

  return (
    <div className={`${modal === false ? true : "modal--open"} modal`}>
      <div className='modal__half modal__about text-black text-center'>
        <h3 className='text-3xl font-semibold'>Here's a bit about me.</h3>
        <h4 className='mt-[12px] mr-0 mb-[24px] ml-0 text-base'>
          Specific Interests:
          <br />
          <b className='text-cOrange'>
            Frontend Software Development and IT Support
          </b>
        </h4>
        <p className='modal__para'>
          I have a huge <b className='text-cOrange'>passion</b> for technology!
          It all started at a young age when I built a PC to play video games.
          Since then, I've thrown myself at every opportunity to{" "}
          <b className='text-cOrange'>learn and expand my technical skillset</b>
          !
          <br />I am currently pursuing a Bachelor's degree in Computer Science
          at the University of Hawaiʻi at Mānoa. I'm also a{" "}
          <b className='text-cOrange'>self-taught</b> frontend developer with
          the <b className='text-cOrange'>Google IT Support Certificate</b>{" "}
          earned through Coursera!
          <br />
          Check out my <b className='text-cOrange'> technology stack </b>below!
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
        <a
          href='#'
          className='absolute top-10 right-10 text-[#fff] text-2xl z-50 hover:scale-110 active:scale-90 transition-all'
          onClick={handleModalToggle}
        >
          <ImCross />
        </a>
        <h3 className='text-3xl font-semibold'>Let's have a chat!</h3>
        <h3 className='mt-[12px] mr-0 mb-[24px] ml-0 text-base'>
          I'm currently open to new opportunities.
        </h3>
        <form id='contact__form' ref={form} onSubmit={sendEmail}>
          <div className='form__item'>
            <label className='form__item--label' name='user_name'>
              Name
            </label>
            <input
              className='input'
              name='user_name'
              type='text'
              required
            ></input>
          </div>
          <div className='form__item'>
            <label className='form__item--label' name='user_email'>
              Email
            </label>
            <input
              className='input'
              name='user_email'
              type='email'
              required
            ></input>
          </div>
          <div className='form__item'>
            <label className='form__item--label' name='message'>
              Message
            </label>
            <textarea
              className='input'
              name='message'
              type='text'
              required
            ></textarea>
          </div>
          <button
            id='contact__submit'
            className='form__submit'
            value='Send'
            type='submit'
          >
            Send it my way
          </button>
        </form>
        <div className='modal__overlay modal__overlay--loading'>
          <CgSpinnerTwo className='fa-spinner' />
        </div>
        <div className='modal__overlay modal__overlay--success'>
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
};

export default Modal;
