import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  const fullStackTools = [ "HTML","CSS","MongoDB","Java" ,"Jquery" ,"JavaScript", "TypeScript", "React", "Node.js",  "MongoDB", "MySQL", "Tailwind CSS" , "Git" , "GitHub" , "Vercel" , ];
  const gameDevTools = [
    "Unity (C#)", 
    "Unreal Engine (Blueprints & C++)", 
    "Blender", 
    "Mixamo", 
    "FMOD", 
    "Shader Graph", 
    "Godot (GDScript)", 
    "Houdini", 
    "Substance Painter"
  ];  
  return (

    <div className="bg-slate-900 text-white p-5 shadow-xl">
      <h1 className="relative text-center text-lg font-bold transition-all duration-500 ease-in-out hover:scale-105 
                     bg-[linear-gradient(90deg,#9B5DE5,#00DFFC,#00FF87)] bg-clip-text text-transparent 
                     bg-[length:200%_100%] bg-left hover:bg-right">
        What I Do
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center h-[calc(70vh-4rem)]" data-aos="fade-down">
  <div className="w-80 bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 flex justify-center items-center h-56 self-center">
    <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
      <div className="z-10 flex flex-col items-center gap-2">
        <span className="text-slate-400 text-6xl font-bold">JR</span>
        <p className="text-gray-50 text-center">Frontend Developer & <br /> Game Developer</p>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-sky-700 rounded-full blur-xl"></div>
      <div className="absolute top-20 right-16 w-16 h-16 bg-sky-400 rounded-full blur-xl"></div>
    </div>
  </div>
</div>


        {/*  */}
        {/* About Me Sections */}
        <div className="w-full md:w-2/3 p-1 space-y-8">
          {/* Full-Stack Development Section */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300" data-aos="zoom-in-left">
            <h2 className="text-3xl font-bold text-cyan-400">Full-Stack Development</h2>
            <p className="text-lg text-gray-300 mt-3">
              I build modern, scalable web applications using cutting-edge technologies. My expertise includes front-end and back-end development, with a strong focus on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {fullStackTools.map((tool) => (
                <div key={tool} className="px-4 py-2 bg-slate-700 rounded-lg shadow-md text-white cursor-pointer hover:bg-cyan-500 transition-all duration-300">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Game Development Section */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300" data-aos="zoom-in-right">
            <h2 className="text-3xl font-bold text-purple-400">Game Development</h2>
            <p className="text-lg text-gray-300 mt-3">
              I develop immersive games with a focus on mechanics, level design, and optimized performance. My skills cover game engines, 3D modeling, and sound integration to create engaging experiences.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {gameDevTools.map((tool) => (
                <div key={tool} className="px-4 py-2 bg-slate-700 rounded-lg shadow-md text-white cursor-pointer hover:bg-purple-500 transition-all duration-300">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
