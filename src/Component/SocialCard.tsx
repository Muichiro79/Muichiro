import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const SocialCard = () => {
  return (
    <button className="h-12 w-48 border-none rounded-full bg-slate-900 cursor-pointer relative group flex justify-center items-center">
      <span className="z-10 absolute bg-sky-500 px-4 py-1.5 rounded-lg text-white text-sm tracking-wide transition-all duration-500 group-hover:opacity-0">
        Links
      </span>
      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
        {/* WhatsApp Link */}
        <a href="https://wa.me/+2348165167403" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-5 h-5 text-emerald-500 hover:text-emerald-400 transition-colors duration-300" />
        </a>

        {/* Instagram Link */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-5 h-5 text-pink-500 hover:text-purple-400 transition-colors duration-300" />
        </a>

        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="w-5 h-5 text-indigo-500 hover:text-indigo-400 transition-colors duration-300" />
        </a>
      </div>
    </button>
  );
};

export default SocialCard;
