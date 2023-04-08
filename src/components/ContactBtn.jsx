import React from "react";
import { IoMail } from "react-icons/io";

const ContactBtn = () => {
  return (
    <button className='w-[70px] h-[70px] text-5xl rounded-full border-none bg-[#242424] text-white fixed bottom-8 right-10 z-10 mail__btn'>
      <IoMail />
    </button>
  );
};

export default ContactBtn;
