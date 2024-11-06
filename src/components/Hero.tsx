import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Sophia W.</h1>
        <p className="text-xl mb-8">Software Engineer | Problem Solver</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:john@example.com" className="hover:text-blue-200">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;