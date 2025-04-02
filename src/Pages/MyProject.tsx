import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Apt from "../assets/images/Apt.png";
import blue from "../assets/images/blue.png";
import glx from "../assets/images/glx.png";
import synk from "../assets/images/synk.png";
import Aptech from "../assets/images/Aptech.png";
import dem from "../assets/images/dem.png";
import tp from "../assets/images/tp.png";
import YRNS from "../assets/images/YRNS.png";
const projects = [
  {
    id: 1,
    image: blue,
    description: "Blue Roof Serviced Apartments",
    link: "https://www.blueroofservicedapartments.com/",
  },
  {
    id: 2,
    image: Apt,
    description: "Aptech Semester1 Project",
    link: "https://aptech-sm1-project.vercel.app/",
  },
  {
    id: 3,
    image: synk,
    description: "Synk AI Marketplace",
    link: "https://synk-liard.vercel.app/",
  },
  {
    id: 4,
    image: glx,
    description: " Glx Clothing Brands ",
    link: "https://glx-gamma.vercel.app/",
  },
  {
    id: 5,
    image: Aptech,
    description: "Synk AI Marketplace",
    link: "https://www.aptechogbacenter.com/",
  },
  {
    id: 6,
    image: dem,
    description: " Demmiz sent hub  ",
    link: "https://demmiz-affordables.vercel.app/",
  },
  {
    id: 7,
    image: tp,
    description: "Tech Pulse",
    link: "https://tech-pulse-rose.vercel.app/",
  },
  {
    id: 8,
    image: YRNS,
    description: "YRNS",
    link: "https://yrns-steel.vercel.app/",
  },
];
const MyProject = () => {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
  return (
    <div className="bg-slate-950 p-10 ">
    <h2
      className="text-4xl  mt-10 font-bold text-center mb-8 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
      data-aos="fade-up"
    >
      Projects Done
    </h2>

    <div className="flex flex-wrap gap-10 justify-center">
      {projects.map((project, index) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group h-[220px] w-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay={index * 200}
        >
          {/* Image - Full Width */}
          <img
            src={project.image}
            alt={project.description}
            className="w-full h-full object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-700 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold tracking-wide">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>

    
  </div>
  )
}

export default MyProject