import Image from "next/image";
import Reveal from "@/components/reveal";

const projects = [
  {
    number: "01",
    title: "Sattar POS",
    image: "/images/projects/sattar-pos.PNG",
    category: "Business Software",
    description:
      "A point-of-sale and inventory management system designed for a family business dealing in paints, sanitary products, building materials, and hardware.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
    status: "Completed",
    visual: "POS",
  },
  {
    number: "02",
    title: "Sattar Fitness",
    category: "Mobile Application",
    description:
      "An offline-first fitness and habit tracking application focused on exercise, nutrition, progress, and personal fitness management.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite"],
    status: "In Development",
    visual: "FIT",
  },
  {
    number: "03",
    title: "Apply PAK",
    category: "Student Platform",
    description:
      "A platform concept designed to help Pakistani students discover universities, academic programs, courses, and relevant opportunities.",
    technologies: ["Web", "Research", "UX/UI"],
    status: "Concept",
    visual: "PAK",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-white/10 bg-[#0c0c0f] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">
              Selected work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Things I&apos;m
              <br />
              building.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            Real projects, experiments, and ideas I&apos;m turning into usable
            products. Some are still under construction — because apparently
            developers enjoy building things more than finishing them.
          </p>
        </Reveal>

        <Reveal className="mt-16 space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101012] transition-all duration-500 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.08),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="grid lg:grid-cols-[90px_1fr_300px]">
                {/* Number */}
                <div className="hidden border-r border-white/10 p-8 lg:block">
                  <span className="font-mono text-sm text-zinc-600 transition group-hover:text-teal-400">
                    {project.number}
                  </span>
                </div>

                {/* Main content */}
                <div className="p-7 sm:p-9 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-teal-400">
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-zinc-700" />

                    <span className="rounded-full border border-teal-400/10 bg-teal-400/[0.04] px-2.5 py-1 text-[11px] text-teal-400/70">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-teal-300 sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition group-hover:border-white/15"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500">
                      Repository link coming soon
                    </span>
                  </div>

                  {project.image && (
                    <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] lg:hidden">
                      <div className="relative h-full min-h-[210px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090b]">
                        <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 backdrop-blur-md">
                          Live Preview
                        </div>

                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 300px"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                            Sattar POS
                          </span>

                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
                        </div>
                      </div>

                      <div className="border-t border-white/10 px-4 py-2.5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          Project preview
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className="relative hidden min-h-[280px] overflow-hidden border-l border-white/10 lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/[0.08] via-transparent to-cyan-400/[0.04]" />

                  {/* Technical grid */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="absolute inset-8 flex items-center justify-center">
                    {project.image ? (
                      <div className="relative h-full min-h-[210px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090b]">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 300px"
                        />
                      </div>
                    ) : (
                      <div className="relative flex h-full min-h-[210px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09090b]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_60%)]" />

                        <div className="relative text-center">
                          <div className="font-mono text-4xl font-semibold tracking-widest text-white/90">
                            {project.visual}
                          </div>

                          <div className="mt-3 flex items-center justify-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />

                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                              Project / {project.number}
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-700">
                          <span>AMJID.DEV</span>
                          <span>2026</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-600">
            More projects coming as I keep building.
          </p>
        </div>
      </div>
    </section>
  );
}
