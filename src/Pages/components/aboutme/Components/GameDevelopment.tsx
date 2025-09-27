import { FaUnity, FaBlender } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { GiHumanEar } from "react-icons/gi"; // Using GiRunningWild as Mixamo placeholder

const GameDevelopment = () => {
  const gameDevTools = [
    { name: "Unity (C#)", icon: <FaUnity />, color: "text-gray-700 dark:text-gray-300" },
    { name: "Unreal Engine (C++ & Blueprints)", icon: <SiUnrealengine />, color: "text-blue-600 dark:text-blue-400" },
    { name: "Blender", icon: <FaBlender />, color: "text-orange-600 dark:text-orange-500" },
    { name: "Mixamo", icon: <GiHumanEar />, color: "text-red-500 dark:text-red-400" },
  ];

  return (
    <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl border border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
          <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
            Game Development
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gameDevTools.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 shadow-lg
                      hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          >
            {/* Icon wrapper with glow */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-200/40 to-purple-400/10 dark:from-purple-600/20 dark:to-purple-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
              <div className={`text-4xl ${tool.color} group-hover:rotate-6 transition-transform duration-300`}>
                {tool.icon}
              </div>
            </div>

            {/* Name */}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
              {tool.name}
            </span>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300 -z-10"></div>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-purple-200/20 dark:bg-purple-600/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-pink-200/20 dark:bg-pink-600/10 rounded-full translate-y-12 -translate-x-12 blur-3xl"></div>
    </div>
  );
};

export default GameDevelopment;
