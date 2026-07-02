import profilePicture from "../assets/Hamza _Pic.png";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50 py-16 lg:py-0 gap-12 lg:gap-16 px-6">
        {/* Decorative background blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#5432a8]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="relative px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            {/* Small Greeting Tag */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="relative rounded-full px-4 py-1.5 text-sm text-[#5432a8] bg-[#5432a8]/10 font-semibold tracking-wide ring-1 ring-[#5432a8]/20">
                👋 Hi, I'm
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 min-h-[1.2em]">
                <Typewriter
                  options={{
                    strings: ["Hamza Asghar Butt"],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    cursor: "|",
                  }}
                />
              </h1>

              <p className="mt-6 text-lg font-medium text-pretty text-slate-600 sm:text-xl/8 max-w-2xl mx-auto lg:mx-0">
                Backend-focused Software Engineer specializing in{" "}
                <span className="text-[#5432a8] font-semibold">Node.js</span>,{" "}
                <span className="text-[#5432a8] font-semibold">NestJS</span>,{" "}
                <span className="text-[#5432a8] font-semibold">TypeScript</span>{" "}
                and{" "}
                <span className="text-[#5432a8] font-semibold">React.js</span>
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-[#5432a8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5432a8]/30 hover:bg-[#452a8c] hover:shadow-xl hover:shadow-[#5432a8]/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5432a8] transition-all duration-300"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="group text-sm font-semibold text-slate-700 hover:text-[#5432a8] transition-colors duration-300"
                >
                  Know more{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative px-3 z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5432a8] to-indigo-400 rounded-full blur-2xl opacity-20 scale-105" />
          <img
            src={profilePicture}
            alt="Hamza Asghar Butt"
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full ring-4 ring-white shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};
