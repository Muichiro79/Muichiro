const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white py-16 px-6 transition-colors duration-500"
    >
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section (Personal Info) */}
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-teal-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
            About Me
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! I'm{" "}
            <span className="text-teal-500 font-semibold">JR</span>, a{" "}
            <span className="text-purple-500 dark:text-purple-400 font-semibold">
              16-year-old developer
            </span>{" "}
            passionate about building modern apps and solving real-world problems with code.  
            I enjoy working across{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              web, mobile, and AI projects
            </span>, always pushing boundaries and learning new things.
          </p>

          {/* Info Card */}
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-xl space-y-4">
            <div>
              <span className="font-semibold text-teal-500">Age:</span>{" "}
              <span className="text-gray-800 dark:text-gray-300">16</span>
            </div>
            <div>
              <span className="font-semibold text-teal-500">Email:</span>{" "}
              <a
                href="mailto:Demiladeafuape74@gmail.com"
                className="hover:text-teal-500 transition-colors"
              >
                Demiladeafuape74@gmail.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-teal-500">From:</span>{" "}
              <span className="text-gray-800 dark:text-gray-300">Lagos, Nigeria</span>
            </div>
          </div>

          {/* Call-to-Actions */}
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 text-white hover:opacity-90 transition"
            >
              Let’s Connect
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Section (Programming Image / Illustration) */}
        <div className="flex justify-center items-center relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            src="https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/26103848/Option-01-1.png"
            alt="Programming Workspace"
            className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
