import {motion}from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-zinc-400 mb-16">
          Have a project or idea? Let's build something amazing together.
        </p>

        {/* Contact Card */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left">
            
            <form className="space-y-6">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
              >
                Send Message 🚀
              </button>

            </form>
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-center items-center gap-6">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-zinc-400">yourmail@example.com</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-zinc-400">India 🇮🇳</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full">
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <p className="text-zinc-400">GitHub • LinkedIn</p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}