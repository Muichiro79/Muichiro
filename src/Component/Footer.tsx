import { FaTwitter, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Muichiro</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Elevating digital experiences with top-tier solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-xl"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Muichiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
