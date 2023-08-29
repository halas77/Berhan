import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1260px] mx-auto px-4 text-white">
      <img
        src={logo}
        alt="Logo Image"
        className="md:w-16 w-12 h-10 mx-4 rounded-md"
      />
      <h1 className="w-full text-3xl font-bold text-white font-mono mt-3">
        <a href="/"> Berhan </a>
      </h1>

      <ul className="hidden md:flex">
        {Links.map((link) => (
          <li key={link.name} className="p-4 font-bold">
            <a href={link.link}> {link.name} </a>
          </li>
        ))}
      </ul>
      <a href="/signin">
        {" "}
        <button className="hidden md:flex w-[200px] rounded-md font-bold my-10 mx-auto py-3 text-[#ebb000] pl-3">
          Sign Up / Sign In
        </button>
      </a>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-600 bg-gray-800 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ebb000] font-mono p-4">
          Berhan
        </h1>
        <ul className="p-4">
          {Links.map((link) => (
            <li
              key={link.name}
              className="p-4 border-b border-gray-600 uppercase"
            >
              <a href={link.link}> {link.name} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
