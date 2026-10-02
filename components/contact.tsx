import Reveal from "@/components/reveal";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/abdulsattarsonsstore-lgtm",
    href: "https://github.com/abdulsattarsonsstore-lgtm",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-amjid-sattar",
    href: "https://www.linkedin.com/in/muhammad-amjid-sattar-49a9763b0/",
  },
  {
    label: "Email",
    value: "muhammad@amjidsattar.com",
    href: "mailto:muhammad@amjidsattar.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0c0c0f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">
              Get in touch
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">
              Have an idea?
              <br />
              <span className="text-zinc-500">Let&apos;s build it.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
              I&apos;m always interested in learning, collaborating, and turning
              interesting ideas into useful things.
            </p>

            <a
              href="mailto:muhammad@amjidsattar.com"
              className="mt-10 inline-flex rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-300"
            >
              Say hello →
            </a>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-teal-400/30 hover:bg-white/[0.04]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                    {link.label}
                  </p>

                  <p className="mt-1 text-sm text-zinc-300 transition group-hover:text-teal-300">
                    {link.value}
                  </p>
                </div>

                <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-teal-400">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
