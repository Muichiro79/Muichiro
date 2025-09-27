import { FaReact } from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiSqlite } from "react-icons/si";
import { MdApi, MdDesignServices } from "react-icons/md";

const MobileDevelopment = () => {
  const mobileSkills = [
    { name: "Flutter", icon: <SiFlutter />, color: "text-cyan-500" },
    { name: "Dart", icon: <SiDart />, color: "text-blue-400" },
    { name: "React Native", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    { name: "SQLite", icon: <SiSqlite />, color: "text-blue-600" },
    { name: "REST APIs", icon: <MdApi />, color: "text-indigo-500" },
    { name: "State Management", icon: <MdApi />, color: "text-green-600" },
    { name: "UI/UX", icon: <MdDesignServices />, color: "text-pink-500" },
  ];

  return (
    <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl border border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
            Mobile Development
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {mobileSkills.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 shadow-lg
                      hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          >
            {/* Icon wrapper with glow */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-200/40 to-emerald-400/10 dark:from-green-600/20 dark:to-emerald-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
              <div className={`text-4xl ${tool.color} group-hover:rotate-6 transition-transform duration-300`}>
                {tool.icon}
              </div>
            </div>

            {/* Name */}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
              {tool.name}
            </span>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-300 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-green-200/20 dark:bg-green-600/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-emerald-200/20 dark:bg-emerald-600/10 rounded-full translate-y-12 -translate-x-12 blur-3xl"></div>
    </div>
  );
};

export default MobileDevelopment;
