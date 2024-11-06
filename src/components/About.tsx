import profileImage from '../assets/profile.jpg';
const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img src={profileImage} alt="Sophia W." className="rounded-full w-48 h-48 object-cover mx-auto" />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <p className="text-gray-600 leading-relaxed">
                            Hi, I'm Sophia W., a computer scientist who embodies the perfect blend of technical acumen and creative problem-solving. My work experience has been marked by a relentless pursuit of excellence in software development, cyber security and artificial intelligence.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            In the fast-paced world of computer science, I am not just a coder; I am an innovator, a problem solver, and a relentless advocate for the limitless potential of technology to shape a brighter future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;