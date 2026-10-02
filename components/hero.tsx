import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Teal glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* LEFT — Text */}
        <div className="max-w-4xl animate-[fadeUp_0.8s_ease-out_both]">
          {/* Status */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 text-sm text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
            Currently building
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Building at the intersection of{" "}
            <span className="text-teal-400">medicine</span>,{" "}
            <span className="text-zinc-400">technology</span> &{" "}
            <span className="text-white">AI.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m Muhammad Amjid Sattar — a DVM student and developer
            exploring web development, mobile apps, AI, and the possibilities of
            technology in veterinary medicine.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-300"
            >
              Explore my work
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              More about me
            </a>
          </div>

          {/* Identity */}

          <div className="mt-10 font-mono text-xs text-zinc-600">
            <span className="text-teal-400/70">const</span>{" "}
            <span className="text-zinc-400">focus</span> ={" "}
            <span className="text-zinc-500">
              &quot;medicine × technology × AI&quot;
            </span>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span>DVM Student</span>
            <span className="hidden text-zinc-700 sm:block">/</span>
            <span>Developer</span>
            <span className="hidden text-zinc-700 sm:block">/</span>
            <span>Builder</span>
            <span className="hidden text-zinc-700 sm:block">/</span>
            <span>AI Explorer</span>
          </div>
        </div>

        {/* RIGHT — Portrait */}
        <div className="relative mx-auto w-full max-w-md animate-[fadeUp_1s_ease-out_0.15s_both] lg:ml-auto">
          {/* Glow behind portrait */}
          <div className="absolute inset-10 rounded-full bg-teal-400/20 blur-[90px]" />

          {/* Portrait frame */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] transition duration-500 hover:border-teal-400/30">
            <Image
              src="/images/amjidsattar.png"
              alt="Muhammad Amjid Sattar"
              width={800}
              height={1000}
              priority
              className="relative z-10 h-auto w-full object-contain transition duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute left-5 top-5 z-30 rounded-full border border-white/10 bg-[#09090b]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md">
              DVM × DEV
            </div>

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#09090b]/40 to-transparent" />
          </div>

          {/* Small identity card */}
          <div className="absolute -bottom-5 -left-5 z-30 rounded-2xl border border-white/10 bg-[#111113]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <p className="text-xs text-zinc-500">Currently</p>
            <p className="mt-1 text-sm font-medium text-white">
              DVM Student · Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
