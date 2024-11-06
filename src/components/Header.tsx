import React from 'react';
import { Code } from 'lucide-react';

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-800">Portfolio</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, 'skills')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;