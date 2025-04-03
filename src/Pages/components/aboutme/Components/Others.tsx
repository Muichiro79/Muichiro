import { FaGit, FaGithub, FaFigma } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Others = () => {
  const otherSkills = [
    { name: "Git", icon: <FaGit className="text-5xl text-orange-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "GitHub", icon: <FaGithub className="text-5xl text-cyan-700 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Vercel", icon: <SiVercel className="text-5xl text-black dark:text-white transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Figma", icon: <FaFigma className="text-5xl text-indigo-500 transition-transform duration-500 group-hover:rotate-360" /> },
  ];

  return (
    <div className="dark:bg-slate-900 p-8 rounded-lg shadow-lg transition-transform duration-300" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 text-center">Other Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {otherSkills.map((tool) => (
          <div key={tool.name} className="group bg-gray-200 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500 ease-in-out text-center text-black dark:text-white flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">
              {tool.icon}
            </div>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
