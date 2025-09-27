import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaWhatsapp } from "react-icons/fa";

// Define TypeScript types for ContactItem props
interface ContactItemProps {
  icon: React.ReactNode;
  link: string;
  text: string;
}

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-950 p-10 transition-colors duration-500">
      <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center transition-all duration-500">
        
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse m-5"></div>

        <h2 className="text-3xl font-bold mb-6 relative z-10 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <div className="space-y-5 relative z-10">
          <ContactItem icon={<FaEnvelope />} link="mailto:Demildeafuape79@gmail.com" text="Demildeafuape79@gmail.com" />
          <ContactItem icon={<FaPhone />} link="tel:+2348165167403" text="+234 816 516 7403" />
          <ContactItem icon={<FaWhatsapp />} link="https://wa.me/2348165167403" text="+234 816 516 7403" />
          <ContactItem icon={<FaGithub />} link="https://github.com/Muichiro79" text="github.com/Muichiro79" />
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, link, text }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer shadow-sm"
  >
    <span className="text-cyan-500 text-xl">{icon}</span>
    <span className="text-sm text-gray-800 dark:text-gray-200">{text}</span>
  </a>
);

export default Contact;
