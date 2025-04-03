import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Fullstack from "./Components/Fullstack";
import GameDevelopment from "./Components/GameDevelopment";
import FrontEnd from "./Components/FrontEnd";
import Others from "./Components/Others";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-sky-600   dark:bg-slate-900 dark:text-white text-black p-5 shadow-xl">
      <h1 className="text-center text-sky-600 dark:text-sky-400 hover:text-emerald-500 duration-300 ease-linear hover:scale-102 font-bold text-2xl">
        My Skills
      </h1>

      <div className="flex flex-col md:flex-col items-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center items-center h-[calc(70vh-4rem)]" data-aos="fade-down">
          <div className="w-80 bg-sky-600 dark:bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-gray-300 dark:outline-slate-400 -outline-offset-8 flex justify-center items-center h-56 self-center">
            <div className="group overflow-hidden relative duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-gray-200 dark:bg-neutral-900 rounded-2xl outline outline-gray-300 dark:outline-slate-400 -outline-offset-8">
              <div className="z-10 flex flex-col items-center gap-2">
                <span className="text-gray-800 dark:text-slate-400 text-6xl font-bold">JR</span>
                <p className="text-gray-900 dark:text-gray-50 text-center">
                  Frontend Developer & <br /> Game Developer
                </p>
              </div>

              {/* Background Elements */}
              <div className="absolute bottom-32 right-16 w-16 h-16 bg-sky-500 dark:bg-sky-700 rounded-full blur-xl"></div>
              <div className="absolute top-20 right-16 w-16 h-16 bg-sky-300 dark:bg-sky-400 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* About Me Sections */}
        <div className="w-full p-2 space-y-8">
          {/* <Fullstack /> */}
          <FrontEnd />
          <GameDevelopment />
          <Others />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
