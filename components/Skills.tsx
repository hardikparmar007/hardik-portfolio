const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-2">
          SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technologies I Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-blue-500 transition"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}