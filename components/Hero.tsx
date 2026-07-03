"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {Download, Mail} from"lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24git"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl"></div>
</div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
  👋 Hello, I'm
</p>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
  <span className="text-white">Parmar</span>
  <br />
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Hardik
  </span>
</h1>
<TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "React Developer",
    2000,
    "Next.js Developer",
    2000,
    "UI/UX Enthusiast",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="block mt-4 text-2xl md:text-3xl font-semibold text-cyan-400"
/>
<p className="text-slate-300 text-lg leading-8 mt-6 max-w-xl">
  Passionate Full Stack Developer creating fast, responsive and modern web
  applications using React, Next.js, Tailwind CSS and JavaScript.
</p>
       <div className="flex flex-wrap gap-4 mt-10">
  <a
    href="#projects"
    className="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
  >
    🚀 View Projects
  </a>

  <a
    href="#contact"
    className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300"
  >
    📩 Contact Me
  </a>
</div> 
  <div className="mt-8">
  <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-cyan-500/30 text-white hover:bg-cyan-500 transition-all duration-300">
    <Download size={20} />
    Download Resume
  </button>
</div>
        </motion.div>

        {/* Right Side */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { duration: 0.8 },
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }}
  className="flex justify-center"
>
       <div className="relative">
  {/* Glow */}
  <div className="absolute -inset-4 rounded-3xl bg-cyan-500/30 blur-3xl"></div>

  <motion.div
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative w-80 h-80 rounded-3xl border border-cyan-400/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl cursor-pointer"
  >
    PH
  </motion.div>
</div>   
        </motion.div>

      </div>
      <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <a href="#about" className="text-cyan-400 text-sm">
    ↓ Scroll Down
  </a>
</motion.div>
    </section>
  );
}