import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-sm.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="w-16 h-auto">
          <img className="w-fit h-auto" src={logo} alt="" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden block text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-12 md:top-auto`}
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-[#87431D] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-[#87431D] transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-[#87431D] transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-[#87431D] transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
