const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sophia W. All rights reserved.</p>
        <p className="mt-2">Backend Engineer & System Architect</p>
      </div>
    </footer>
  );
};

export default Footer;