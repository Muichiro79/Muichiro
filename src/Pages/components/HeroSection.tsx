import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Orb from './Orb';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  const links = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
  ];
  
  const stats = [
    { name: "Projects Completed", value: "12+" },
    { name: "Years of Experience", value: "3" },
    { name: "Tech Stack", value: "10+" },
    { name: "Games in Development", value: "2" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-transparent py-24 sm:py-32 min-h-screen flex items-center">
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={isHovered}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-200/80 dark:to-slate-950/90 -z-5" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div 
          className="mx-auto max-w-2xl lg:mx-0" 
          data-aos="fade-up" 
          data-aos-duration="1200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-sm font-semibold tracking-tight bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 text-transparent bg-clip-text sm:text-sm dark:from-cyan-400 dark:via-pink-400 dark:to-purple-400">
            👋 Hello, I am
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white mb-4">
            Xenon
            <span className="block text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-purple-400">
              Full-Stack & Game Developer
            </span>
          </h2>
          
          <div className="grid">
            <p
              className="mt-4 text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-300 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Crafting digital experiences through <span className="font-semibold text-sky-600 dark:text-sky-400">web applications</span>, 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> mobile solutions</span>, and 
              <span className="font-semibold text-green-600 dark:text-green-400"> immersive games</span>. 
              Specializing in React, Flutter, Unity, and modern full-stack technologies.
            </p>
          </div>
        </div>

        {/* Animated Links */}
        <div
          className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex flex-wrap gap-6 text-base font-semibold">
            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-gray-900"
                data-aos="fade-right"
                data-aos-delay={200 * index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-purple-400 font-medium">
                  {link.name}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Enhanced Stats Cards */}
          <dl
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.name}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-300/50 dark:border-gray-600/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                data-aos="flip-left"
                data-aos-delay={200 * index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-purple-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 via-purple-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900" />
                </div>

                <div className="relative z-10 text-center">
                  {/* Animated Number */}
                  <dd className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-purple-400 group-hover:from-green-500 group-hover:to-cyan-500 transition-all duration-500">
                    {stat.value}
                  </dd>
                  
                  {/* Animated Title */}
                  <dt className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {stat.name}
                  </dt>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-sky-400/30 rounded-full group-hover:bg-purple-400/40 transition-all duration-1000"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 40}%`,
                        animation: `float${i + 1} 3s ease-in-out infinite`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for floating animations */}
      <style >{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-5px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(8px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;