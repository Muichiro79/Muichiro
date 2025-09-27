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
    <div className="bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-10 transition-all duration-300">
      {/* Section Title */}
      <h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text drop-shadow-lg"
        data-aos="fade-up"
      >
        Company Projects
      </h2>

      {/* Project Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group h-[230px] w-[400px] rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl bg-white/20 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700 hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.description}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold tracking-wide drop-shadow-lg px-4 text-center">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <Link to="/projects">
          <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-lg hover:shadow-cyan-400/50 transition-all duration-500 relative overflow-hidden group">
            <span className="relative z-10">View More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompaniesProject;
