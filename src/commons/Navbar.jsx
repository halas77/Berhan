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
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={logo} alt="Logo Image" className="md:w-14 w-12 h-10 mx-4 rounded-md" />
      <h1 className="w-full text-3xl font-bold text-[#f6ba00] font-mono">
        Berhan
      </h1>

      <ul className="hidden md:flex">
        {Links.map((link) => (
          <li key={link.name} className="p-4 font-bold">
            <a href={link.link}> {link.name} </a>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-gray-600 bg-gray-800 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#f6ba00] font-mono p-4">
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
