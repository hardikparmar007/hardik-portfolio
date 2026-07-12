"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

useEffect(() => {
  const handleScroll = () => {
    const sections = navLinks.map((item) =>
      document.getElementById(item.id)
    );

    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      if (!section) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer select-none flex items-center gap-2">
  <Image
    src="/hicon.png"
    alt="Hardik Logo"
    width={40}
    height={40}
    className="rounded-full"
    priority
  />
  <span className="text-cyan-400">Hardik</span>
  <span className="text-white">.</span>
</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
  {navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      className={`relative transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
        activeSection === link.id
          ? "text-cyan-400 after:w-full"
          : "text-gray-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
      }`}
    >
      {link.label}
    </a>
  ))}
</div>
        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
  {navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={handleClose}
      className={`block px-6 py-4 transition-all duration-300 ${
        activeSection === link.id
          ? "text-cyan-400 border-l-4 border-cyan-400 bg-cyan-500/10"
          : "text-gray-300 hover:text-cyan-400 hover:bg-slate-900"
      }`}
    >
      {link.label}
    </a>
  ))}
</div>
      )}
    </nav>
  );
}