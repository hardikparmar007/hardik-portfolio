"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white scroll-smooth overflow-x-hidden">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* EDUCATION */}
      <section id="education">
        <Education />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
      
    </main>
  );
}