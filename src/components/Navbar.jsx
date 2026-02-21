import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-bgLight dark:bg-bgDark shadow-md z-10 text-gray-900 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary dark:text-cyan-400">Afzal Ahamed A</Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, path }) => (
            <Link key={label} to={path} className="text-gray-800 dark:text-slate-200 hover:text-primary dark:hover:text-cyan-400 transition">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2" aria-label="Toggle theme">
            {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-700" />}
          </button>
          <button className="md:hidden p-2 text-gray-800 dark:text-slate-200" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bgLight dark:bg-bgDark shadow-md border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-gray-800 dark:text-slate-200 hover:text-primary dark:hover:text-cyan-400 transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;