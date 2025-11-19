'use client';

import { motion } from 'framer-motion';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaDatabase, FaCode, FaServer, FaPalette } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTypescript, SiMysql, SiRedis, SiApachemaven, SiJunit } from 'react-icons/si';

const AboutPage = () => {
  const skills = {
    languages: [
      { name: 'Java', icon: FaJava, level: 90, color: 'text-red-500' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaCode, level: 90, color: 'text-yellow-500' },
      { name: 'SQL', icon: FaDatabase, level: 80, color: 'text-green-600' }
    ],
    frameworks: [
      { name: 'Spring Boot', icon: SiSpringboot, level: 85, color: 'text-green-600' },
      { name: 'React', icon: FaReact, level: 80, color: 'text-blue-400' },
      { name: 'Hibernate/JPA', icon: FaServer, level: 75, color: 'text-indigo-600' }
    ],
    databases: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: 'text-blue-600' },
      { name: 'MySQL', icon: SiMysql, level: 70, color: 'text-blue-500' },
      { name: 'Redis', icon: SiRedis, level: 60, color: 'text-red-600' }
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-600' },
      { name: 'Docker', icon: FaDocker, level: 70, color: 'text-blue-500' },
      { name: 'Maven', icon: SiMaven, level: 85, color: 'text-red-600' },
      { name: 'JUnit', icon: SiJunit5, level: 80, color: 'text-green-600' }
    ]
  };

  const experience = [
    {
      title: 'Backend-Focused Full Stack Developer',
      company: 'Freelance & Personal Projects',
      period: '2022 - Present',
      description: 'Developing full-stack applications with Java Spring Boot backend and React frontend. Specializing in REST API development, database design, and cloud deployment.',
      highlights: [
        'Built real-time streaming platform with WebSockets',
        'Developed e-commerce platform with multi-vendor support',
        'Implemented file compression algorithms for desktop applications'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Tech Company',
      period: '2020 - 2022',
      description: 'Developed and maintained enterprise Java applications using Spring Boot and microservices architecture.',
      highlights: [
        'Designed and implemented RESTful APIs',
        'Optimized database queries improving performance by 40%',
        'Led code reviews and mentored junior developers'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2016 - 2020',
      details: 'Focused on software engineering, algorithms, and database systems. Graduated with honors.'
    }
  ];

  return (
    <div id="about" className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Backend-focused full-stack developer with a passion for building scalable, production-ready applications
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm a backend-focused full-stack developer with expertise in Java, Spring Boot, and React.
                My journey in software development started with a curiosity about how things work behind the scenes,
                which led me to specialize in building robust backend systems and APIs.
              </p>
              <p>
                Over the years, I've worked on diverse projects ranging from real-time streaming platforms to
                e-commerce solutions, always focusing on scalability, performance, and clean code practices.
                I believe in writing code that not only works but is also maintainable and well-documented.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and mentorship.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaServer className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Backend Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    REST APIs, microservices, database design, authentication, and server-side logic
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaReact className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    React applications, responsive design, state management, and modern UI/UX
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaDatabase className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Database Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Schema design, query optimization, data modeling, and NoSQL solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaDocker className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">DevOps & Deployment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Containerization, CI/CD pipelines, cloud deployment, and monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                  {category === 'languages' ? 'Languages' :
                   category === 'frameworks' ? 'Frameworks' :
                   category === 'databases' ? 'Databases' : 'Tools'}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Icon className={`w-4 h-4 ${skill.color}`} />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education[0].degree}</h3>
                <p className="text-blue-600 dark:text-blue-400">{education[0].school}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{education[0].period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{education[0].details}</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;