import { FaUnity, FaBlender } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";

const GameDevelopment = () => {
  const gameDevTools = [
    { name: "Unity (C#)", icon: <FaUnity className="text-5xl text-gray-700 dark:text-gray-300 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Unreal Engine (C++ & Blueprints)", icon: <SiUnrealengine className="text-5xl text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Blender", icon: <FaBlender className="text-5xl text-orange-600 dark:text-orange-500 transition-transform duration-500 group-hover:rotate-360" /> },
    { name: "Mixamo", icon: <SiUnrealengine className="text-5xl text-red-500 dark:text-red-400 transition-transform duration-500 group-hover:rotate-360" /> },
  ];

  return (
    <div className=" dark:bg-slate-900 p-8 rounded-lg shadow-lg transition-transform duration-300" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 text-center">
        Game Development
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {gameDevTools.map((tool) => (
          <div key={tool.name} className="group bg-gray-200 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/50 hover:scale-105 transition-all duration-500 ease-in-out text-center text-black dark:text-white flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">{tool.icon}</div>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDevelopment;
