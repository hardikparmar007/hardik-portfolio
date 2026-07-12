export default function Education() {
  return (
    <section
      id="education"
      className="relative py-1 px-6 bg-slate-950 text-white overflow-hidden  "
    >
      {/* Background Glow */}
<div className="absolute inset-0 -z-10 ">
  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
</div>
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-1">
          EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-11">
          My Education
        </h2>

        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/20 transition-colors duration-300 -mt-8">
          <h3 className="text-2xl font-semibold mb-2 ">
            IMSC (CA & IT)
          </h3>

          <p className="text-blue-400 mb-4">
            Shreyarth University
          </p>

          <p className="text-zinc-300 leading-7">
            Currently pursuing the Integrated Master of Science in Computer Applications & Information Technology. Passionate about web development, programming, and continuously learning modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
}