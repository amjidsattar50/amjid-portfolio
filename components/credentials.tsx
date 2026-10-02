import Reveal from "@/components/reveal";

const credentials = [
  {
    number: "01",
    category: "VETERINARY MEDICINE",
    title: "Fundamentals of Veterinary Anesthesia",
    organization:
      "VIVRC — Veterinary Importance and Veterinarians Respect Club",
    status: "COMPLETED",
    description: "Certified in Fundamentals of Veterinary Anesthesia.",
  },
  {
    number: "02",
    category: "ANIMAL HEALTH & AWARENESS",
    title: "Dog Health Champion",
    organization: "GARC — Global Alliance for Rabies Control",
    status: "AWARDED",
    description:
      "Awarded Bronze and Silver Dog Health Champion badges for dog health, rabies control, and public awareness.",
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "ACT AI — National AI Training Programme",
    organization: "AI SkillBridge",
    status: "COMPLETED",
    description:
      "Completed ACT AI, a nationwide, AI training initiative launched under the Prime Minister's Youth Programme in collaboration with HEC, NAVTTC, and AI SkillBridge.",
  },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden border-t border-white/5 bg-[#09090b] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-400">
              Credentials & Achievements
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Learning beyond the classroom.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
              A growing record of learning across veterinary medicine, animal
              health, public awareness, and artificial intelligence.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="space-y-4">
            {credentials.map((credential) => (
              <article
                key={credential.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)] sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(20,184,166,0.08),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative grid gap-6 lg:grid-cols-[80px_1fr_auto] lg:items-center">
                  <div className="font-mono text-sm text-zinc-600">
                    {credential.number}
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-400">
                      {credential.category}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {credential.organization}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
                      {credential.description}
                    </p>
                  </div>

                  <div className="font-mono text-xs tracking-[0.15em] text-zinc-500 lg:text-right">
                    {credential.status}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
