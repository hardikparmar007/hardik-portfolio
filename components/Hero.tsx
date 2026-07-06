"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-28 lg:flex-row lg:px-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Hi, I'm{" "}
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Parmar Hardik
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Next.js Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-slate-400 leading-8">
            I build modern, responsive and premium web experiences using React,
            Next.js and Tailwind CSS with clean UI and smooth animations.
          </p>

          {/* HERO ACTION SECTION */}
          <div className="mt-10 flex flex-col items-center lg:items-start">

            {/* TOP BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="#projects"
                className="flex h-14 w-48 items-center justify-center rounded-xl border border-cyan-400/60 bg-white/5 font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
              >
                🚀 View Projects
              </a>

              <a
  href="#contact"
  className="group relative flex h-14 w-48 items-center justify-center rounded-xl border border-cyan-400/60 bg-white/5 font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
>
  {/* Glow background */}
  <span className="absolute inset-0 rounded-xl bg-cyan-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></span>

  {/* Border glow */}
  <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400 transition-all duration-300"></span>

  <span className="relative z-10">📩 Contact Me</span>
</a>
            </div>

            {/* DOWNLOAD */}
            <div className="mt-5 flex w-full justify-center lg:justify-start">
              <a
  href="/resume.pdf"
  download="Parmar_Hardik_Resume.pdf"
  className="inline-flex h-14 w-64 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-500/40"
>
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-10">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                <p className="text-slate-400 text-sm">Projects</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
                <p className="text-slate-400 text-sm">Years Learning</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-slate-400 text-sm">Dedication</p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 items-center justify-center mt-8 lg:mt-0 lg:translate-x-25"
        >
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/30 animate-ping" />

<div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20" />

<div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10" />

          <motion.div
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.45)] md:h-80 md:w-80"
          >
            <Image
              src="/pp.png"
              alt="Parmar Hardik"
              fill 
              sizes="(max-width: 768px)100vw,50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}