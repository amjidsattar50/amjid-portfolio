import Reveal from "@/components/reveal";

const journey = [
  {
    year: "2025",
    title: "Started DVM",
    description:
      "Began my Doctor of Veterinary Medicine journey at the University of Veterinary & Animal Sciences.",
  },
  {
    year: "2025–26",
    title: "Started exploring technology",
    description:
      "Started learning frontend development, building interfaces with HTML and CSS, and gradually moving into modern web technologies.",
  },
  {
    year: "2026",
    title: "Started building real products",
    description:
      "Moved beyond tutorials and started working on practical projects including business software, fitness applications, and educational platforms.",
  },
  {
    year: "Now",
    title: "Going deeper",
    description:
      "Currently exploring JavaScript, React, Next.js, mobile development, AI, and automation while continuing my DVM.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">
            The journey
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Still learning.
            <br />
            Still building.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400">
            This isn&apos;t a finished story. It&apos;s a timeline of where
            I&apos;ve been, what I&apos;m learning, and where I&apos;m heading
            next.
          </p>
        </Reveal>

        {/* Timeline */}
        <Reveal className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={item.year}
                className="relative grid gap-6 pl-10 sm:grid-cols-[140px_1fr] sm:gap-10 sm:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-teal-400 bg-[#09090b] shadow-[0_0_15px_rgba(45,212,191,0.35)] sm:left-[3px]" />

                {/* Year */}
                <div>
                  <span className="font-mono text-sm text-teal-400">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`${
                    index === journey.length - 1
                      ? "border-teal-400/20"
                      : "border-white/10"
                  } rounded-2xl border bg-white/[0.02] p-6`}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Closing line */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="font-mono text-sm text-zinc-600">
            next → keep building
          </p>
        </div>
      </div>
    </section>
  );
}
