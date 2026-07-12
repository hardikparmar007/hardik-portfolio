"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 pt-20 py-40 px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-3xl md:text-5xl font-semibold tracking-[0.1em] uppercase mb-3 mt-2">
            Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Use
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-colors duration-300"
            >
              <div className="flex flex-col items-center">
  {skill.icon}
  <p className="mt-4 text-lg font-semibold">
    {skill.name}
  </p>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}