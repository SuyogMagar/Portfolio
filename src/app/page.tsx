'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaJava, FaReact, FaGithub, FaArrowDown } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTypescript } from 'react-icons/si';

const Home = () => {
  const techStack = [
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  ];

  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block">Suyog Magar</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Backend-Focused Full Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Specializing in Java, Spring Boot, and React to build scalable, production-ready web applications.
            Passionate about clean code, robust APIs, and creating exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Core Technologies
            </h3>
            <div className="flex justify-center items-center space-x-6 lg:space-x-8">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center space-y-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className={`w-10 h-10 lg:w-12 lg:h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://github.com/suyogmagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                View my GitHub Profile
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FaArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
