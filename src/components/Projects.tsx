import { Github, Database, Server, Lock, ArrowRight } from 'lucide-react';

const projects = [
  {
  title: 'Event-Driven JWT Microservices',
  description: 'A production-ready, event-driven microservices system with JWT authentication, real-time notifications, centralized monitoring, and robust service discovery. Built with Spring Cloud, Eureka, Redis, MongoDB, and WebSocket.',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', // or any image you prefer
  icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  github: 'https://github.com/swanjiku/eventdriven-jwt-microservices',
  techStack: ['Spring Cloud', 'JWT', 'Redis', 'MongoDB', 'WebSocket', 'Java']
  },
  {
    title: 'Distributed Cache System',
    description: 'High-performance distributed caching solution built with Redis and Spring Boot, optimized to handle high traffic loads and ensure low-latency responses even during peak usage.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    github: 'https://github.com/swanjiku/distributed-cache-system',
    techStack: ['Redis', 'Spring Boot', 'Java']
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices platform with modular services for user authentication, post management, and comments, featuring secure JWT authentication and seamless inter-service communication.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    github: 'https://github.com/swanjiku/microservices-architecture',
    techStack: ['Spring Cloud', 'Spring Boot', 'Java']
  },
  {
    title: 'API Security Gateway',
    description: 'A robust API gateway offering secure JWT authentication, rate-limiting configurations, real-time threat detection, and seamless integration to ensure secure and efficient API management.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    github: 'https://github.com/swanjiku/api-security-gateway',
    techStack: ['JWT', 'Spring Boot', 'Java']
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity duration-200"
                >
                  <Github className="mr-2" size={20} />
                  View Source Code
                  <ArrowRight className="ml-1" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
