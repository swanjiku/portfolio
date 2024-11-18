import { CheckCircle, Database, Server, Shield, Code, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['Java', 'Python', 'Node.js'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Security',
    icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['JWT', 'SSL/TLS', 'Security Auditing'],
  },
  {
    title: 'API Design',
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['REST', 'Swagger/OpenAPI'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['Docker', 'CI/CD'],
  },
  {
    title: 'Tools & Testing',
    icon: <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ['Git', 'Postman'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <CheckCircle className="text-green-500 dark:text-green-400 mr-2" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;