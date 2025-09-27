import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const FrontEnd = () => {
  const FrontEndTools = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800 dark:text-gray-200" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Java", icon: <FaJava />, color: "text-red-600" },
  ];

  return (
    <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl border border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
            Frontend Development
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
        {FrontEndTools.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col items-center justify-center p-6 rounded-xl
            bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-gray-200 dark:border-slate-700
            shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300
            hover:border-transparent hover:bg-gradient-to-br hover:from-blue-200/40 hover:to-cyan-200/30 dark:hover:from-blue-600/20 dark:hover:to-cyan-500/20"
          >
            {/* Icon with hover animation */}
            <div className="relative w-16 h-16 flex items-center justify-center mb-3">
              <div
                className={`text-4xl ${tool.color} group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {tool.icon}
              </div>
            </div>

            {/* Name */}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 dark:bg-blue-600/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-cyan-200/20 dark:bg-cyan-600/10 rounded-full translate-y-12 -translate-x-12 blur-3xl"></div>
    </div>
  );
};

export default FrontEnd;
