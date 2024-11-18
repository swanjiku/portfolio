import React, { useState, useEffect } from 'react';
import { Code, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'hero')} 
          className="flex items-center hover:opacity-80 transition-opacity duration-200"
        >
          <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <span className="font-bold text-xl text-gray-800 dark:text-white">Portfolio</span>
        </a>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, 'skills')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;