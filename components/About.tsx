import { motion } from "framer-motion";
import Image from "next/image"; // <--- Yeh import add kiya hai taaki Image sahi se chale

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-20 pb-28 px-6 bg-slate-950 text-white overflow-hidden mb-1"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase mb-0">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
          <span>Crafting</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Modern Digital
          </span>
          <br />
          <span className="-mt-8">Experiences</span> 
        </h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div className="flex justify-center -mt-2">
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 250 }}
    className="relative w-70 h-70 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden"
  >
    {/* Soft Glow */}
    <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full" />

    <div className="relative text-center">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg mx-auto justify-center mt-3">
        <Image
          src="/pp.png"
          alt="Parmar Hardik"
          width={144}
          height={144}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="mt-1 text-2xl font-bold">
        Parmar Hardik
      </h3>

      <p className="text-cyan-400 mt-1">
        Full Stack Developer
      </p>
    </div>
  </motion.div>
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
        <div className="grid md:grid-cols-2 gap-15 mt-3">
          {[
            {
              title: "Education",
              desc: "Currently pursuing IMSC (CA & IT) at Shreyarth University and continuously improving my knowledge in web development and programming.",
            },
            {
              title: "Career Goal",
              desc: "My goal is to become a professional Full Stack Developer and build modern, scalable, and user-friendly web applications.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-zinc-900/70 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500/30 transition shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-300 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}