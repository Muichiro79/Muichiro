import { useEffect } from "react";
// import Header from "../../Component/Header";
import { Link } from "react-router-dom";
// import vid1 from "../../assets/vid6.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  const links = [
    { name: "About", href: "/about" },
    // { name: "Services", href: "" },
    { name: "Contact", href: "/contact" },
    { name: "Project", href: "/projects" },
  ];
  const stats = [
    { name: "Projects Completed", value: "10+" },
    { name: "Years of Experience", value: "2+" },
    // { name: "Tech Stack", value: "React, Unity, Tailwind" },
    { name: "Games in Development", value: "1" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-slate-200 dark:bg-slate-950 py-24 sm:py-32">
      {/* Video Background */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vid1} type="video/mp4" />
      </video> */}

      {/* <Header /> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 opacity-80">
        <div className="mx-auto max-w-2xl lg:mx-0" data-aos="fade-up" data-aos-duration="1200">
          <p className="text-sm font-semibold tracking-tight bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 text-transparent bg-clip-text sm:text-sm dark:text-transparent dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-cyan-500">
            👋 Hello I am
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-sky-600 sm:text-7xl dark:text-sky-400">
            Muichiro
          </h2>
          <div className="grid">
            <p
              className="mt-8 text-lg font-medium text-sky-700 sm:text-xl dark:text-sky-400"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              A passionate developer specializing in Frontend and Game Development. I love crafting interactive, high-performance web applications and immersive gaming experiences. Always learning, always creating.
            </p>
          </div>
        </div>

        <div
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10 dark:text-white">
            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative transition-all duration-300 ease-in-out hover:scale-105 bg-gradient-to-r from-[#00DFFC] to-[#00DFFC] bg-clip-text text-transparent hover:from-[#9B5DE5] hover:via-[#00DFFC] hover:to-[#00FF87] dark:hover:from-[#9B5DE5] dark:hover:via-[#00DFFC] dark:hover:to-[#00FF87]"
                data-aos="fade-right"
                data-aos-delay={200 * index}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] transition-all duration-300 ease-in-out hover:w-full dark:bg-gradient-to-r dark:from-[#9B5DE5] dark:via-[#00DFFC] dark:to-[#00FF87]"></span>
              </Link>
            ))}
          </div>

          <dl
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.name}
                className="flex flex-col items-center justify-center text-center rounded-2xl bg-gray-800/10 backdrop-blur-md border border-white/20 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:border-cyan-400 w-full max-w-md mx-auto dark:bg-gray-800/20 dark:border-white/30 dark:text-white"
                data-aos="flip-left"
                data-aos-delay={200 * index}
              >
                {/* Stat Number */}
                <dd className="text-5xl font-extrabold text-white drop-shadow-md dark:text-gray-300">
                  {stat.value}
                </dd>

                {/* Stat Name */}
                <dt className="mt-2 text-lg font-medium text-gray-300 dark:text-gray-400">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
