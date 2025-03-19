import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    category: "Game Development",
    items: [
      {
        title: "3D Endless Runner",
        description:
          "A fast-paced mobile endless runner game with dynamic environments and power-ups.",
        technologies: ["Unity (C#)", "Blender", "FMOD", "Shader Graph"],
        inProgress: true,
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "AI Marketplace",
        description:
          "A platform connecting AI developers with buyers, featuring real-time messaging and notifications.",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
        inProgress: false,
      },
      {
        title: "DRP-WRLD Clothing Store",
        description:
          "An e-commerce site for my clothing brand featuring custom-designed streetwear.",
        technologies: ["React", "Next.js", "Stripe API", "Tailwind CSS"],
        inProgress: false,
      },
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-slate-950 w-full p-10">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#9B5DE5] via-[#00DFFC] to-[#00FF87] text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        {projects.map((section, index) => (
          <div key={index} className="mb-10" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              {section.category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((project, idx) => (
                <div
                  key={idx}
                  className="relative bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  data-aos="zoom-in"
                >
                  <h4 className="text-xl font-semibold text-white">
                    {project.title}
                  </h4>
                  {project.inProgress && (
                    <span className="absolute top-1 right-1 bg-yellow-500  text-white px-2 py-1 text-xs rounded-md">
                      In Progress
                    </span>
                  )}
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-3 py-1 rounded-md text-sm text-white transition-colors duration-300 ${
                          section.category === "Web Development"
                            ? "bg-cyan-600 hover:bg-purple-600"
                            : "bg-purple-600 hover:bg-cyan-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Conditional Button Color with Hover Effect */}
                  <button
                    className={`mt-4 px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 ${
                      section.category === "Web Development"
                        ? "bg-cyan-600 hover:bg-purple-600"
                        : "bg-purple-600 hover:bg-cyan-600"
                    } text-white`}
                  >
                    View Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
