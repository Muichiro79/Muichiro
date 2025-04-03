const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white py-10 px-6">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section (Personal Info) */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-600 to-indigo-600 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-300">
            Hey there! I'm <span className="text-teal-400 font-semibold">JR</span>, a passionate developer who loves to push boundaries. I'm constantly exploring new technologies and creative solutions.
          </p>

          <div className="text-lg text-gray-300 space-y-3">
            <div>
              <span className="font-semibold text-teal-400">Age:</span> 16
            </div>
            <div>
              <span className="font-semibold text-teal-400">Email:</span> <a href="mailto:Demiladeafuape74@gmail.com" className="hover:text-teal-400">Demiladeafuape74@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-teal-400">From:</span> Lagos, Nigeria
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-4">
            Let’s connect and create something amazing. Feel free to reach out anytime!
          </p>
        </div>

        {/* Right Section (Programming Image) */}
        <div className="flex justify-center items-center">
          <img
            src="https://eccweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/26103848/Option-01-1.png" // Replace with your programming image URL
            alt="Programming Workspace"
            className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
