import Reveal from "@/components/reveal";

const skillGroups = [
  {
    title: "Web Development",
    level: "Using",
    description:
      "Building responsive interfaces and learning modern frontend development through real projects.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    level: "Learning",
    description:
      "Exploring cross-platform application development and offline-first mobile experiences.",
    skills: ["React Native", "Expo", "Expo Router"],
  },
  {
    title: "Data & Backend",
    level: "Learning",
    description:
      "Working with databases, APIs, local storage, and application data.",
    skills: ["Supabase", "SQLite", "REST APIs", "JSON"],
  },
  {
    title: "Development Tools",
    level: "Using",
    description:
      "The tools and environments I use while building, testing, and learning.",
    skills: ["Git", "GitHub", "VS Code", "Termux"],
  },
  {
    title: "AI & Automation",
    level: "Exploring",
    description:
      "Experimenting with AI-assisted development, research workflows, and automation.",
    skills: ["ChatGPT", "Claude", "Gemini", "NotebookLM", "n8n"],
  },
];

const levelStyles = {
  Using: "border-teal-400/20 bg-teal-400/5 text-teal-300",
  Learning: "border-blue-400/20 bg-blue-400/5 text-blue-300",
  Exploring: "border-purple-400/20 bg-purple-400/5 text-purple-300",
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">
            Skills & tools
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Learning by
            <br />
            building.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400">
            Technologies I&apos;m using, learning, and exploring as I continue
            building projects across software, mobile development, and AI.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 text-xs text-teal-300">
            Using
          </span>

          <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300">
            Learning
          </span>

          <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5 text-xs text-purple-300">
            Exploring
          </span>
        </div>

        <Reveal className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <span
                  className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${
                    levelStyles[group.level as keyof typeof levelStyles]
                  }`}
                >
                  {group.level}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300 transition group-hover:border-white/15 group-hover:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">The stack keeps evolving.</p>

            <p className="mt-1 text-sm text-zinc-500">
              Every project adds another tool, concept, or problem to learn
              from.
            </p>
          </div>

          <span className="mt-4 block font-mono text-sm text-zinc-600 sm:mt-0">
            2026 →
          </span>
        </div>
      </div>
    </section>
  );
}
