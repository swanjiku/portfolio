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
              Hi, I'm Sophia W., a passionate backend engineer with 5 years of experience in distributed systems and cloud architecture. I specialize in building scalable, resilient microservices and designing robust APIs that power modern applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              My expertise includes optimizing database performance, implementing caching strategies, and ensuring system security. I'm particularly interested in solving complex architectural challenges and building systems that can handle millions of requests efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;