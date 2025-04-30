import profileImage from '../assets/profile.jpg';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={profileImage} alt="Sophia W." className="rounded-full w-48 h-48 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm Sophia W., an advanced backend engineer specializing in distributed systems, microservices, and cloud-native architectures. My expertise spans Spring Boot, Redis, MongoDB, and real-time event-driven solutions. I’m passionate about building resilient systems with robust API security, monitoring, and observability using tools like Prometheus and Grafana.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              I thrive on solving complex architectural challenges and collaborating with teams to deliver scalable, high-performance platforms. My focus is on optimizing database performance, implementing effective caching strategies, and ensuring system security for modern, high-demand applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;