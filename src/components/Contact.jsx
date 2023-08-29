import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
      <h1
        className="text-center justify-center mt-[-20px] pb-20 text-4xl font-bold
      "
      >
        Contact Us{" "}
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-xl hover:scale-105 duration-300 bg-gray-50">
          <AiOutlinePhone size={50} className="mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Phone</h2>
          <p className="text-center font-medium border-y py-4">+251938071193</p>
          <p className="text-center font-medium p-3">+251900578275</p>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-xl hover:scale-105 duration-300 bg-gray-50">
          <AiOutlineMail size={50} className="mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Email</h2>
          <p className="text-center font-medium border-y py-4">
            kelkiasselamu@gmail.com
          </p>
          <p className="text-center font-medium p-3">Dawitm777@gmail.com</p>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-xl hover:scale-105 duration-300 bg-gray-50">
          <FaSearchLocation size={50} className="mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Address</h2>
          <p className="text-center font-medium border-y py-4">Addis Ababa</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
