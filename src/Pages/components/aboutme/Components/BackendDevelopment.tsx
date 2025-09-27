import { FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFirebase, SiMongodb, SiAuth0 } from "react-icons/si";
import { MdApi } from "react-icons/md";

const BackendDevelopment = () => {
  const backendSkills = [
    { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-700" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "SQLite", icon: <FaDatabase />, color: "text-blue-500" },
    { name: "REST APIs", icon: <MdApi />, color: "text-indigo-500" },
    { name: "Authentication", icon: <SiAuth0 />, color: "text-orange-500" },
    { name: "Server Management", icon: <FaDatabase />, color: "text-gray-600" },
  ];

  return (
    <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl border border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
          <h2 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
            Backend Development
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {backendSkills.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 shadow-lg
                      hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          >
            {/* Icon wrapper with glow */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-200/40 to-orange-400/10 dark:from-orange-600/20 dark:to-red-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
              <div className={`text-4xl ${tool.color} group-hover:rotate-6 transition-transform duration-300`}>
                {tool.icon}
              </div>
            </div>

            {/* Name */}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
              {tool.name}
            </span>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-orange-200/20 dark:bg-orange-600/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-red-200/20 dark:bg-red-600/10 rounded-full translate-y-12 -translate-x-12 blur-3xl"></div>
    </div>
  );
};

export default BackendDevelopment;
