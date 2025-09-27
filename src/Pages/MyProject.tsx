import { useEffect } from "react";
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
    type: "web",
    image: blue,
    description: "Blue Roof Serviced Apartments",
    link: "https://www.blueroofservicedapartments.com/",
  },
  {
    id: 2,
    type: "web",
    image: Apt,
    description: "Aptech Semester1 Project",
    link: "https://aptech-sm1-project.vercel.app/",
  },
  {
    id: 3,
    type: "web",
    image: synk,
    description: "Synk AI Marketplace",
    link: "https://synk-liard.vercel.app/",
  },
  {
    id: 4,
    type: "web",
    image: glx,
    description: "Glx Clothing Brand",
    link: "https://glx-gamma.vercel.app/",
  },
  {
    id: 5,
    type: "web",
    image: Aptech,
    description: "Aptech Ogba Center",
    link: "https://www.aptechogbacenter.com/",
  },
  {
    id: 6,
    type: "web",
    image: dem,
    description: "Demmiz Sent Hub",
    link: "https://demmiz-affordables.vercel.app/",
  },
  {
    id: 7,
    type: "web",
    image: tp,
    description: "Tech Pulse",
    link: "https://tech-pulse-rose.vercel.app/",
  },
  {
    id: 8,
    type: "web",
    image: YRNS,
    description: "YRNS",
    link: "https://yrns-steel.vercel.app/",
  },
  // --- Mobile Apps Section ---
  {
    id: 9,
    type: "mobile",
    image:
      "https://cdn.dribbble.com/userupload/25590047/file/original-c031649076defaac2c31c6923312ff7d.gif",
    description: "CitiGuide (Mobile App)",
    link: "#",
  },
  {
    id: 10,
    type: "mobile",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/04d4df99573735.5ef59ef49ec30.png",
    description: "AspireEdge (Mobile App)",
    link: "#",
  },
  {
    id: 11,
    type: "mobile",
    image:
      "https://d1tzxux72fvryy.cloudfront.net/Mfc7d6d48c9eb8f84af1f9711124094161726204655504/preview/Mfc7d6d48c9eb8f84af1f9711124094161726204655504.png",
    description: "Bank App (Mobile App)",
    link: "#",
  },
];

const MyProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-slate-950 py-20 px-6 transition-colors duration-500">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Projects Done
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.type === "web" ? project.link : "#"}
            target={project.type === "web" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative group h-[240px] w-full rounded-2xl overflow-hidden shadow-lg 
              border border-white/20 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.description}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4"
            >
              <p className="text-lg font-semibold text-white mb-2">
                {project.description}
              </p>
              {project.type === "web" ? (
                <span className="text-sm text-cyan-300">Click to View</span>
              ) : (
                <span className="text-sm text-yellow-300">
                  Mobile App – To be added
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
