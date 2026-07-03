"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer select-none">
          <span className="text-cyan-400">Hardik</span>
          <span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <a href="#home" className="relative transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</a>
          <a href="#about" className="relative transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#skills" className="relative transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Skills</a>
          <a href="#projects" className="relative transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
          <a href="#contact" className="relative transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden bg-slate-950 border-t border-slate-800">
    <a
      href="#home"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 hover:text-cyan-400"
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 hover:text-cyan-400"
    >
      About
    </a>

    <a
      href="#skills"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 hover:text-cyan-400"
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 hover:text-cyan-400"
    >
      Projects
    </a>

    <a
      href="#contact"
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 hover:text-cyan-400"
    >
      Contact
    </a>
  </div>
)}
    </nav>
  );
}