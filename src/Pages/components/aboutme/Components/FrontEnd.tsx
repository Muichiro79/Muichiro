import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const FrontEnd = () => {
  const FrontEndTools = [
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-600 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Java", icon: <FaJava className="text-5xl text-red-500 transition-transform duration-500 group-hover:rotate-360" /> },
  ];

  return (
    <div className=" dark:bg-slate-900 p-8 rounded-lg shadow-lg transition-transform duration-300" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 text-center">
        Front-End Development Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {FrontEndTools.map((tool) => (
          <div key={tool.name} className="group bg-gray-200 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-sky-500/50 hover:scale-105 transition-all duration-500 ease-in-out text-center text-black dark:text-white flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">{tool.icon}</div>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEnd;
