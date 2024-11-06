import { CheckCircle } from 'lucide-react';

const skills = [
  'Java', 'Spring Boot', 
  'Python', 'Django',
  'Frappe', 'Laravel',
  'Angular', 'React',
  'PostgreSQL', 'MySQL','MongoDB', 
  'Docker', 'Git', 'RESTful APIs'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-lg p-3">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;