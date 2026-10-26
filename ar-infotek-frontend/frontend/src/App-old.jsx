import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <nav>
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-slate-900 transition-colors hover:text-indigo-600"
          >
            Udhaya
          </a>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-6">
            <li>
              <a
                href="#home"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          AR IN fotek
        </h1>
     </main>
     </div>  


    </>
  )
}

export default App
