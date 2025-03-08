import React from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import agcLogo from "../assets/agc-logo.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold text-primary-400">AGC</h1> */}
            <img src={agcLogo} alt="AGC Logo" className="w-16 rounded-md" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500"
            >
              Courses
            </a>
            <a
              href="#demo"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500"
            >
              Demo Classes
            </a>
            <a
              href="#faculty"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500"
            >
              Faculty
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-500"
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#courses"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Courses
              </a>
              <a
                href="#demo"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Demo Classes
              </a>
              <a
                href="#faculty"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Faculty
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
