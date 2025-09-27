import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaReact,
  FaPalette,
  FaDatabase,
  FaGamepad,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaChalkboardTeacher,
  FaSearch,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites built with React, Next.js, and Tailwind — optimized for speed, SEO, and conversions.",
    icon: <FaLaptopCode className="text-4xl text-indigo-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps with Flutter & React Native, delivering sleek design and smooth performance for iOS and Android.",
    icon: <FaMobileAlt className="text-4xl text-pink-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end solutions with modern stacks: Django, Node.js, Firebase, and SQL/NoSQL databases.",
    icon: <FaDatabase className="text-4xl text-green-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-green-500/20 to-emerald-500/10",
  },
  {
    title: "AI & Chatbots",
    description:
      "AI-powered assistants, content generators, and smart integrations to automate and supercharge your business.",
    icon: <FaBrain className="text-4xl text-purple-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-purple-500/20 to-fuchsia-500/10",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that balance aesthetics with usability. Wireframes, prototypes, and full UI kits.",
    icon: <FaPalette className="text-4xl text-yellow-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-yellow-500/20 to-amber-500/10",
  },
  {
    title: "Game Development",
    description:
      "2D adventure games, interactive experiences, and experiments with AI-driven gameplay using Godot & Unity.",
    icon: <FaGamepad className="text-4xl text-red-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-red-500/20 to-orange-500/10",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployments, CI/CD pipelines, and cloud integration with Firebase, Vercel, Netlify, and AWS.",
    icon: <FaCloud className="text-4xl text-cyan-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-cyan-500/20 to-sky-500/10",
  },
  {
    title: "Consulting & Training",
    description:
      "Helping startups, devs, and teams sharpen their skills and systems through hands-on mentoring.",
    icon: <FaChalkboardTeacher className="text-4xl text-teal-500 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-teal-500/20 to-emerald-500/10",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost search rankings with technical SEO, optimized content structure, and performance tuning for visibility.",
    icon: <FaSearch className="text-4xl text-indigo-600 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "Performance Optimization",
    description:
      "Fine-tuning apps for speed, reliability, and scalability. Core Web Vitals, code refactors, and caching strategies.",
    icon: <FaRocket className="text-4xl text-rose-600 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-rose-500/20 to-pink-500/10",
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates, bug fixing, and scaling support so your product never stops evolving.",
    icon: <FaTools className="text-4xl text-gray-600 group-hover:scale-110 transition-transform duration-500" />,
    gradient: "from-gray-500/20 to-gray-400/10",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-gray-950 w-full py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Services
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 
              bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md group-hover:shadow-lg transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-5 mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
