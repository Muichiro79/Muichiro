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
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-10">
      <div className="relative bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center transition-all duration-500 animate-float">
        
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse m-5"></div>

        <h2 className="text-3xl font-bold mb-6 relative z-10">Contact Me</h2>

        <div className="space-y-5 relative z-10">
          <ContactItem icon={<FaEnvelope />} link="mailto:your.email@example.com" text="Demildeafuape79@gmail.com" />
          <ContactItem icon={<FaPhone />} link="tel:+1234567890" text="+234 816 516 7403" />
          <ContactItem icon={<FaWhatsapp />} link="https://wa.me/2348165167403" text="+234 816 516 7403" />
          <ContactItem icon={<FaGithub />} link="https://github.com/x-10-Next-Gen" text="github.com/X-10-Next-Gen" />
          {/* <ContactItem icon={<FaLinkedin />} link="https://linkedin.com/in/yourprofile" text="linkedin.com/in/yourprofile" />
          <ContactItem icon={<FaTwitter />} link="https://twitter.com/yourhandle" text="@yourhandle" /> */}
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
    className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 cursor-pointer"
  >
    <span className="text-cyan-400 text-xl">{icon}</span>
    <span className="text-sm">{text}</span>
  </a>
);

export default Contact;
