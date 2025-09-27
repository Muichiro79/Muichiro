import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
import { Link } from "react-router-dom";
import SocialCard from "./SocialCard"; // Assuming you have this component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine the hamburger icon color based on dark mode status
  const isDarkMode = document.documentElement.classList.contains('dark'); 

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-6 lg:px-16 py-4 transition-all duration-300 ${
          isScrolled
            ? "w-[80%] backdrop-blur-md shadow-lg py-3 rounded-xl"
            : "w-full py-6"
        } z-[9999]`}
      >
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-sky-400">Muichiro</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-6 text-lg">
          <Link to="/">
            <li className="cursor-pointer text-sky-400 relative group">
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/Projects">
            <li className="cursor-pointer text-sky-400 relative group">
              Projects
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer text-sky-400 relative group">
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/Contact">
            <li className="cursor-pointer text-sky-400 relative group">
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
        </ul>

        {/* Social Media Icons (Visible only on Desktop) */}
        <div className="hidden lg:flex">
          <SocialCard />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden text-2xl ${isDarkMode ? 'text-white' : 'text-sky-500'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-2/3   bg-slate-200 dark:bg-slate-950 p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-[9999]`}
      >
        {/* <button
          className="text-white text-2xl absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button> */}

        <ul className="flex flex-col gap-6 text-lg mt-10">
          <Link to="/">
            <li className="cursor-pointer text-sky-400 relative group inline-block">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/Projects">
            <li className="cursor-pointer text-sky-400 relative group inline-block">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer text-sky-400 relative group inline-block">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
          <Link to="/Contact">
            <li className="cursor-pointer text-sky-400 relative group inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 via-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </Link>
        </ul>

        {/* Social Media Icons in Mobile Menu (Inside Hamburger Menu) */}
        <div className="mt-10">
          <SocialCard />
        </div>
      </div>
    </>
  );
};

export default Header;
