export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-semibold tracking-tight text-white">
            AMJID<span className="text-teal-400">.</span>
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            DVM Student · Developer · Builder · AI Explorer
          </p>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Muhammad Amjid Sattar
        </p>
      </div>
    </footer>
  );
}