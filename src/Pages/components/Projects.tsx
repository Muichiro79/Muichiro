import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaReact, FaPalette, FaDatabase, FaGamepad } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    description:
      "Building modern and responsive websites using the latest web technologies to provide an exceptional user experience.",
    icon: <FaLaptopCode className="text-3xl text-purple-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
  {
    title: "React Web App",
    description:
      "Creating powerful, dynamic web applications with React, ensuring fast performance and scalability.",
    icon: <FaReact className="text-3xl text-cyan-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user interfaces that are intuitive and user-friendly while maintaining a beautiful, modern aesthetic.",
    icon: <FaPalette className="text-3xl text-yellow-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
  {
    title: "Full Stack Development",
    description:
      "Expert in both frontend and backend technologies, delivering complete, full-stack web applications.",
    icon: <FaDatabase className="text-3xl text-green-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
  {
    title: "Game Development",
    description:
      "Developing interactive and immersive games for multiple platforms, using engines like Unity and Unreal Engine.",
    icon: <FaGamepad className="text-3xl text-red-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
  {
    title: "More",
    description:
      "I also explore new technologies and creative projects across various domains, from AI to IoT.",
    icon: <FaLaptopCode className="text-3xl text-gray-400 mb-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-slate-950 w-full p-10">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-aos="zoom-in"
            >
              <div className="flex items-center justify-center group">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
