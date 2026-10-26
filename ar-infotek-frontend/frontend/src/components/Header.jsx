export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="AR INFOTEK home">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-lg font-extrabold text-white">
            AR
          </div>

          <div>
            <p className="text-lg font-extrabold tracking-wide text-slate-900">
              AR INFOTEK
            </p>
            <p className="text-xs text-slate-500">
              Learn. Build. Grow.
            </p>
          </div>
        </a>

        <p className="hidden text-sm text-slate-600 sm:block">
          Student & Intern Portal
        </p>
      </div>
    </header>
  );
}
