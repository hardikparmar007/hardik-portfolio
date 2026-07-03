import{motion} from 
"framer-motion";
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio built using Next.js and Tailwind CSS.",
  },
  {
    title: "Coming Soon",
    description:
      "More exciting projects will be added here as I continue learning and building.",
  },
  {
    title: "Soon",
    description:
      "Stay tuned for future web development projects and real-world applications.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
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
          Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-zinc-300 leading-7">
                  {project.description}
                </p>

                {/* Button */}
                <div className="mt-6">
                  <button className="text-sm text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}