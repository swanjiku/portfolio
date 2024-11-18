import { Github, Linkedin, Mail, Database, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-600 dark:bg-blue-800 text-white py-20 transition-colors duration-200">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6 space-x-4">
          <Database className="h-12 w-12 text-white" />
          <Server className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Sophia W.</h1>
        <p className="text-xl mb-4">Backend Engineer & System Architect</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Specializing in scalable systems, microservices architecture, and cloud infrastructure
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors duration-200">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:sophia@example.com" className="hover:text-blue-200 transition-colors duration-200">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;