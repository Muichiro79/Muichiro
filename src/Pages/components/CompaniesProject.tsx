import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blue from "../../assets/images/blue.png";
import Aptech from "../../assets/images/Aptech.png";

const projects = [
  {
    id: 1,
    image: blue,
    description: "Blue Roof Serviced Apartments",
    link: "https://www.blueroofservicedapartments.com/",
  },
  {
    id: 2,
    image: Aptech,
    description: "Aptech Ogba",
    link: "https://www.aptechogbacenter.com/",
  },
];

const CompaniesProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-sky-600 dark:bg-slate-900 p-10 transition-all duration-300">
      <h2
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Projects Done
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
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

      {/* Updated Button with a modern hover effect */}
      <Link to="/projects">
        <div className="flex justify-center mt-8">
          <button
            className="group relative w-28 h-12 text-neutral-50 bg-neutral-800 p-2 overflow-hidden rounded-lg flex items-center justify-center"
            data-aos="fade-up"
          >
            <p className="absolute font-bold z-10 duration-500">View More</p>
            <div>
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-0" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-4" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-8" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-12" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-16" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 -bottom-16 group-hover:-bottom-1 right-20" />
              <div className="absolute duration-500 bg-cyan-600 w-4 h-16 bottom-12 group-hover:-bottom-1 delay-500 right-24" />
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CompaniesProject;
