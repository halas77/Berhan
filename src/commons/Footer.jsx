import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-4 gap-8 text-gray-400">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#ebb000]">Berhan</h1>
        <p className="py-4"> Unveiling a World of Learning for All </p>
        <div className="flex space-x-10 md:w-[75%] my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>

      <div>
        <h6 className="font-medium  text-gray-400"> Solutions </h6>
        <ul>

        <li className="py-2 text-sm"> <a href="/berhan-assistance"> Berhan Assistance </a> </li>
        <li className="py-2 text-sm"> <a href="/berhan-exam"> Berhan Exam </a> </li>


        </ul>
      </div>

      <div>
        <h6 className="font-medium  text-gray-400"> Support </h6>
        <ul>
          
        <li className="py-2 text-sm"> <a href="/pricing"> Pricing </a> </li>
        <li className="py-2 text-sm"> <a href="/guide"> Guide </a> </li>


        </ul>
      </div>

      <div>
        <h6 className="font-medium  text-gray-400"> Company </h6>
        <ul>
          
          <li className="py-2 text-sm"> <a href="/about"> About </a> </li>
          <li className="py-2 text-sm"> <a href="/jobs"> Jobs </a> </li>
          <li className="py-2 text-sm"> <a href="/Awards"> Awards </a> </li>



        </ul>
      </div>

      
    </div>
  );
};

export default Footer;
