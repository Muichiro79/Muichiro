import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../assets/images/react.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] transition-all duration-300 z-50 rounded-lg shadow-md hidden md:block 
          ${scrolled ? "bg-none bg-opacity-60 backdrop-blur-lg" : "bg-none bg-opacity-20"}`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/home">
          <div className="flex items-center gap-2">
            
            <img src={ReactLogo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-lg font-bold bg-gradient-to-r from-[#00DFFC] to-[#00DFFC] bg-clip-text text-transparent 
              transition-all duration-300 hover:from-[#9B5DE5] hover:via-[#00DFFC] hover:to-[#00FF87]">
              Name
            </h1>
           
          </div> 
          </Link>
          {/* Navigation */}
          <nav>
            <ul className="flex gap-5 text-gray-700 dark:text-gray-300">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <li key={index} className="relative cursor-pointer group">
                  <Link to={`/${item.toLowerCase()}`} className="relative after:block after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 group-hover:after:w-full bg-gradient-to-r from-[#00DFFC] to-[#00DFFC] bg-clip-text text-transparent 
              transition-all duration-300 hover:from-[#9B5DE5] hover:via-[#00DFFC] hover:to-[#00FF87]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Started Button */}
          <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="absolute top-0 left-0 w-full bg-transparent z-50 md:hidden">
        <div className="flex justify-between items-center p-4">
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            {menuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-8 text-white text-2xl font-semibold">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index} className="relative cursor-pointer group">
                <Link to={`/${item.toLowerCase()}`} className="relative after:block after:h-[2px] after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 group-hover:after:w-full group-hover:text-cyan-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Get Started Button */}
          <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">
            Get Started
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;