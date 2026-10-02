import Reveal from "@/components/reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#0c0c0f] py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
        <div className="pointer-events-none absolute right-[-120px] top-[-80px] hidden h-[420px] w-[420px] lg:block">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/10" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/10" />

          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          <div className="absolute left-[22%] top-[25%] h-2 w-2 rounded-full bg-teal-400/60 shadow-[0_0_15px_rgba(45,212,191,0.5)]" />

          <div className="absolute right-[20%] top-[38%] h-1.5 w-1.5 rounded-full bg-cyan-400/50" />

          <div className="absolute bottom-[25%] left-[38%] h-1.5 w-1.5 rounded-full bg-teal-400/40" />

          <div className="absolute bottom-[18%] right-[30%] h-2 w-2 rounded-full bg-white/20" />

          <div className="absolute left-[22%] top-[25%] h-px w-40 origin-left rotate-[18deg] bg-gradient-to-r from-teal-400/30 to-transparent" />

          <div className="absolute left-[38%] bottom-[25%] h-px w-32 origin-left -rotate-[28deg] bg-gradient-to-r from-teal-400/20 to-transparent" />

          <div className="absolute right-[20%] top-[38%] h-px w-28 origin-left rotate-[65deg] bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </div>
        {/* Section heading */}
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">
            About me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A veterinarian in training,
            <br />a developer by curiosity.
          </h2>
        </Reveal>

        <Reveal className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main story */}
          <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>
              I&apos;m currently pursuing my Doctor of Veterinary Medicine at
              the University of Veterinary & Animal Sciences. Alongside
              veterinary medicine, I&apos;ve developed a strong interest in
              software, technology, and artificial intelligence.
            </p>

            <p>
              I enjoy taking an idea and turning it into something people can
              actually use — whether that&apos;s a business management system, a
              mobile application, an educational platform, or an experiment with
              AI.
            </p>

            <p>
              My background in veterinary medicine gives me a different
              perspective on technology. I&apos;m especially interested in
              exploring how software and AI can eventually solve practical
              problems in veterinary medicine, education, and everyday life.
            </p>
          </div>

          {/* Identity cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-teal-400/30">
              <div className="mb-4 text-2xl">🧬</div>

              <h3 className="font-semibold text-white">Veterinary Medicine</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Building my foundation in veterinary science while exploring
                where technology can fit into the field.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-teal-400/30">
              <div className="mb-4 text-2xl">💻</div>

              <h3 className="font-semibold text-white">Software Development</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Learning by building websites, applications, dashboards, and
                practical digital products.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-teal-400/30">
              <div className="mb-4 text-2xl">🤖</div>

              <h3 className="font-semibold text-white">AI & Automation</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Exploring AI-assisted development, intelligent applications, and
                workflow automation.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Personal line */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm text-zinc-500">
            DVM by profession. Developer by curiosity. Builder by choice.
          </p>
        </div>
      </div>
    </section>
  );
}
