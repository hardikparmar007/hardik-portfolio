export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <h2 className="text-2xl font-bold">
            <span className="text-cyan-400">Hardik</span>
            <span className="text-white">.</span>
          </h2>

          {/* Quick Links */}
          <div className="flex gap-6 text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">
          <p>© 2026 Parmar Hardik. All Rights Reserved.</p>

          <p className="mt-2">
            Made with ❤️ using Next.js, React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}