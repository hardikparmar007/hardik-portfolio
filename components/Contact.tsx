"use client";

import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="relative pt-22 py-25 px-6 bg-slate-950 text-white overflow-hidden scroll-mt-24"
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

        <p className="text-zinc-400 mb-10 md:mb-12">
          Have a project or idea? Let's build something amazing together.
        </p>

        {/* Contact Card */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/40 transition"
          >
            <form
              ref={form}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);

               emailjs.sendForm(
    "service_u6ua184",
    "template_3oz2mme",
    form.current!,
    "A7XhiNkXTu-7aWB7l"
  )
  .then(() => {
    toast.success("Message Sent 🚀");
    form.current?.reset();
    setLoading(false);
  })
  .catch((error) => {
    console.error(error);
    toast.error("Failed to send message");
    setLoading(false);
  });
              }}
            >
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                maxLength={500}
                className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500 outline-none"
              />

              <button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed transition font-semibold"
>
  {loading ? "Sending..." : "Send Message 🚀"}
</button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="flex flex-col gap-5 self-start md:-mt-34">

            {/* Email */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <a
                href="mailto:hardikparmar1050@gmail.com"
                className="text-zinc-400 hover:text-cyan-400"
              >
                hardikparmar1050@gmail.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-zinc-400 mb-4">
                📍 Ranip, Ahmedabad, Gujarat, India
              </p>

              <iframe
                src="https://www.google.com/maps?q=Ranip%2C%20Ahmedabad%2C%20Gujarat&output=embed"
                className="w-full h-40 rounded-lg border border-white/10"
                loading="lazy"
              />
            </motion.div>

            {/* Social */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4">Social</h3>

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/hardikparmar007"
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400"
                >
                  <FaGithub size={22} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/hardik-parmar-a82888407"
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400"
                >
                  <FaLinkedin size={22} />
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/13_hardik_007"
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400"
                >
                  <FaInstagram size={22} />
                  Instagram
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}