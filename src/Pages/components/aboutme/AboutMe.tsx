import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GameDevelopment from "./Components/GameDevelopment";
import FrontEnd from "./Components/FrontEnd";
import MobileDevelopment from "./Components/MobileDevelopment";
// import BackendDevelopment from "./Components/BackendDevelopment";
import Others from "./Components/Others";
import BackendDevelopment from "./Components/BackendDevelopment";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
          My Skills & Expertise
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Full-Stack Developer creating digital experiences across web, mobile, and gaming platforms
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Profile Card - Top Center */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="relative group">
            {/* Main Card */}
            <div className="relative w-80 h-96 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 dark:border-slate-600/30 overflow-hidden">
              
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/15 to-cyan-200/20 dark:from-blue-500/15 dark:via-purple-500/10 dark:to-cyan-500/15 group-hover:opacity-100 opacity-80 transition-all duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-300/30 dark:bg-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-300/30 dark:bg-purple-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-1000"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                {/* Avatar/Initials */}
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">FS</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  Full Stack Developer
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Web • Mobile • Games • Backend
                </p>

                {/* Tech Stack Preview */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {['React', 'Flutter', 'Python', 'Firebase'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-200 border border-white/40 dark:border-slate-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid - 2x2 Layout */}
       <div className="space-y-16 max-w-6xl mx-auto">
  {/* Frontend */}
  <div data-aos="fade-right" className="relative group">
    <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-sky-400/30 transition-all duration-500">

      <FrontEnd />
    </div>
  </div>

  {/* Mobile */}
  <div data-aos="fade-left" className="relative group">
    <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-purple-400/30 transition-all duration-500">

      <MobileDevelopment />
    </div>
  </div>

  {/* Backend */}
  <div data-aos="fade-right" className="relative group">
    <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-cyan-400/30 transition-all duration-500">

      <BackendDevelopment />
    </div>
  </div>

  {/* Game Dev */}
  <div data-aos="fade-left" className="relative group">
    <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-pink-400/30 transition-all duration-500">

      <GameDevelopment />
    </div>
  </div>

  {/* Others */}
  <div data-aos="fade-up" className="relative group">
    <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:shadow-green-400/30 transition-all duration-500">

      <Others />
    </div>
  </div>
</div>


        {/* Tools & Others Section - Full Width */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="600">
          <Others />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="zoom-in" data-aos-delay="800">
        {[
          { value: '3+', label: 'Years Experience' },
          { value: '12+', label: 'Projects Completed' },
          { value: '15+', label: 'Technologies' },
          { value: '4', label: 'Platforms' }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/40 dark:border-slate-600/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;