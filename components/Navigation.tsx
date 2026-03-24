'use client';

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-black dark:text-white">
          ANTONIO
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
            Experience
          </Link>
          <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
            About Me
          </Link>
          <Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
            Projects and Skills
          </Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
