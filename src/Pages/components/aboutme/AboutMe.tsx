import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fullstack from "./Components/Fullstack";
import GameDevelopment from "./Components/GameDevelopment";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-slate-900 text-white p-5 shadow-xl" >
      <h1 className="relative text-center text-lg font-bold transition-all duration-500 ease-in-out hover:scale-105 
                     bg-[linear-gradient(90deg,#9B5DE5,#00DFFC,#00FF87)] bg-clip-text text-transparent 
                     bg-[length:200%_100%] bg-left hover:bg-right">
        What I Do
      </h1>

      <div className="flex flex-col md:flex-col items-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center h-[calc(70vh-4rem)]" data-aos="fade-down">
          <div className="w-80 bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 flex justify-center items-center h-56 self-center">
            <div className="group overflow-hidden relative duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
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

        {/* About Me Sections */}
        <div className="w-full p-2 space-y-8">
          <Fullstack />
          <GameDevelopment />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
