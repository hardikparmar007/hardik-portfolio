import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <motion.div
  className="max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
        
        {/* Heading */}
        <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase mb-3">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-12">
          <span className="text-white">Crafting</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Modern Digital
          </span>
          <br />
          Experiences
        </h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Card */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl border border-cyan-500/20 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

              <div className="relative text-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold text-white mx-auto">
                  PH
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Parmar Hardik
                </h3>

                <p className="text-cyan-400 mt-2">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-zinc-300 leading-8 text-lg">
            <p>
              Hi, I'm <span className="text-white font-semibold">Parmar Hardik</span>, currently pursuing IMSC (CA & IT) at Shreyarth University.
            </p>

            <p>
              I enjoy learning modern web development and building clean, responsive, and user-friendly websites using the latest technologies.
            </p>

            <p>
              My goal is to become a skilled Full Stack Developer and create high-quality digital experiences that solve real-world problems.
            </p>
          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/30 transition">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-zinc-300 leading-7">
              Currently pursuing IMSC (CA & IT) at Shreyarth University and continuously improving my knowledge in web development and programming.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/30 transition">
            <h3 className="text-2xl font-semibold mb-4">Career Goal</h3>
            <p className="text-zinc-300 leading-7">
              My goal is to become a professional Full Stack Developer and build modern, scalable, and user-friendly web applications.
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}