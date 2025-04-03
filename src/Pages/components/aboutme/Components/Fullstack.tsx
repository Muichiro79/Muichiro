import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiVercel } from "react-icons/si";

const Fullstack = () => {
  const fullStackTools = [
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Java", icon: <FaJava className="text-5xl text-red-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-700 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-600 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Git", icon: <FaGit className="text-5xl text-orange-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "GitHub", icon: <FaGithub className="text-5xl text-cyan-700 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Vercel", icon: <SiVercel className="text-5xl text-black dark:text-white transition-transform duration-500 group-hover:rotate-360" /> },
  ];

  return (
    <div className=" dark:bg-slate-900 p-8 rounded-lg shadow-lg transition-transform duration-300" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 text-center">
        Full-Stack Development
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-3 text-center">
        I build modern, scalable web applications using cutting-edge technologies. My expertise includes front-end and back-end development, with a strong focus on performance and user experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {fullStackTools.map((tool) => (
          <div key={tool.name} className="group bg-gray-200 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out text-center text-black dark:text-white flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">{tool.icon}</div>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fullstack;
