"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio Website",
    desc: "Latest personal portfolio built using modern frontend technologies with clean UI, responsive design and smooth animations.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    link: "https://github.com/hardikparmar007/hardik-portfolio",
  },
  {
    title: "Netflix Login Page Clone",
    desc: "Static Netflix login page clone built for frontend practice with pixel-perfect UI using only HTML and CSS.",
    tech: "HTML, CSS",
    link: "https://github.com/hardikparmar007/NETFLIX-LOGIN-PAGE",
  },
  {
    title: "Portfolio",
    desc: "Previous version of my personal portfolio website built during early learning phase using HTML and CSS.",
    tech: "HTML, CSS",
    link: "https://github.com/hardikparmar007/portfolio--",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 pt-20 pb-20 px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text:1xl md:text-2xl tracking-[0.1em] uppercase mb-3">
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{y: -8 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-colors duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-sm mb-4 leading-6">
                {project.desc}
              </p>

              {/* Tech */}
              <p className="text-cyan-400 text-sm mb-6">
                {project.tech}
              </p>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}