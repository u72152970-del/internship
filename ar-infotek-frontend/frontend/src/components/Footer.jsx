export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} AR INFOTEK. All rights reserved.
        </p>

        <p>Student & Intern Portal</p>
      </div>
    </footer>
  );
}