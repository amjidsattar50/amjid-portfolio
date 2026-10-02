import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-center text-white">
      <div className="max-w-md">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-teal-400">
          404
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight">
          Page not found.
        </h1>

        <p className="mt-5 text-sm leading-7 text-zinc-500">
          Looks like this route hasn&apos;t been built yet.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
