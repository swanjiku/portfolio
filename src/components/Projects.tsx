import { Github, Database, Server, Lock, ArrowRight, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Event-Driven JWT Microservices',
    description: 'A robust, production-ready microservices system implementing JWT authentication and authorization using Spring Cloud, Eureka, Redis, MongoDB, and WebSocket. Demonstrates scalable, event-driven architecture with centralized monitoring and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    github: 'https://github.com/swanjiku/eventdriven-jwt-microservices',
    techStack: ['Spring Boot 3+', 'Spring Cloud Gateway', 'Eureka Discovery', 'Spring Security', 'JWT', 'Redis', 'MongoDB', 'WebSocket', 'Resilience4j', 'Prometheus', 'Grafana'],
    features: [
      'JWT Authentication & RBAC',
      'Centralized API Gateway Security',
      'Service Discovery (Eureka)',
      'Real-Time Event-Based Notifications',
      'Centralized Monitoring (Prometheus + Grafana)',
      'Circuit Breaker, Retry, and Fault Tolerance',
    ],
  },
  {
    title: 'Distributed Cache System',
    description: 'High-performance distributed caching solution built with Redis and Spring Boot, optimized for high traffic and low-latency responses. Ensures cache consistency and failover in distributed environments.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
    github: 'https://github.com/swanjiku/distributed-cache-system',
    techStack: ['Redis', 'Spring Boot', 'Java', 'Docker'],
    features: [
      'Distributed Cache',
      'High Availability (Redis Sentinel)',
      'Cache Invalidation Strategies',
      'Low Latency',
    ],
  },
  {
    title: 'Microservices Social Platform',
    description: 'Microservices platform for user authentication, post management, and comments. Features secure JWT-based authentication, seamless inter-service communication, and an API Gateway for unified routing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
    github: 'https://github.com/swanjiku/microservices-social-platform',
    techStack: ['Spring Boot', 'Spring Cloud', 'JWT', 'Docker', 'REST APIs'],
    features: [
      'User Authentication (JWT)',
      'Post & Comment Management',
      'API Gateway Routing',
      'Inter-Service Communication',
      'Containerized with Docker',
    ],
  },
  {
    title: 'API Security Gateway',
    description: 'A robust API gateway offering secure JWT authentication, rate-limiting, real-time threat detection, and seamless integration for secure and efficient API management.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
    github: 'https://github.com/swanjiku/api-security-gateway',
    techStack: ['Spring Boot', 'JWT', 'Bucket4j', 'Java'],
    features: [
      'JWT Authentication',
      'Rate Limiting (Bucket4j)',
      'Real-Time Threat Detection',
      'IP Blocklisting',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.features && project.features.map((feature, featureIdx) => (
                    <span key={featureIdx} className="px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
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
