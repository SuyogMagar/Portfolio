'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types/portfolio';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaCode, FaServer, FaPalette, FaTools } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiTypescript, SiMysql, SiRedis, SiApachemaven, SiJunit, SiAngular, SiNodedotjs, SiFirebase, SiTailwindcss, SiMongodb } from 'react-icons/si';

const SkillsPage = () => {
  const skills: Skill[] = [
    // Languages
    { id: '1', name: 'Java', category: 'language', proficiency: 'expert', yearsOfExperience: 5, icon: 'FaJava', displayOrder: 1 },
    { id: '2', name: 'TypeScript', category: 'language', proficiency: 'advanced', yearsOfExperience: 3, icon: 'SiTypescript', displayOrder: 2 },
    { id: '3', name: 'JavaScript', category: 'language', proficiency: 'expert', yearsOfExperience: 5, icon: 'FaCode', displayOrder: 3 },
    { id: '4', name: 'SQL', category: 'language', proficiency: 'advanced', yearsOfExperience: 3, icon: 'FaServer', displayOrder: 4 },
    { id: '5', name: 'Python', category: 'language', proficiency: 'intermediate', yearsOfExperience: 2, icon: 'FaCode', displayOrder: 5 },

    // Frameworks
    { id: '6', name: 'Spring Boot', category: 'framework', proficiency: 'expert', yearsOfExperience: 4, icon: 'SiSpringboot', displayOrder: 1 },
    { id: '7', name: 'React', category: 'framework', proficiency: 'advanced', yearsOfExperience: 3, icon: 'FaReact', displayOrder: 2 },
    { id: '8', name: 'Hibernate/JPA', category: 'framework', proficiency: 'advanced', yearsOfExperience: 3, icon: 'FaServer', displayOrder: 3 },
    { id: '9', name: 'Next.js', category: 'framework', proficiency: 'advanced', yearsOfExperience: 2, icon: 'SiNodedotjs', displayOrder: 4 },
    { id: '10', name: 'Angular', category: 'framework', proficiency: 'intermediate', yearsOfExperience: 1, icon: 'SiAngular', displayOrder: 5 },
    { id: '11', name: 'Tailwind CSS', category: 'framework', proficiency: 'advanced', yearsOfExperience: 2, icon: 'SiTailwindcss', displayOrder: 6 },

    // Databases
    { id: '12', name: 'PostgreSQL', category: 'database', proficiency: 'advanced', yearsOfExperience: 2, icon: 'SiPostgresql', displayOrder: 1 },
    { id: '13', name: 'MySQL', category: 'database', proficiency: 'intermediate', yearsOfExperience: 2, icon: 'SiMysql', displayOrder: 2 },
    { id: '14', name: 'MongoDB', category: 'database', proficiency: 'intermediate', yearsOfExperience: 1, icon: 'SiMongodb', displayOrder: 3 },
    { id: '15', name: 'Redis', category: 'database', proficiency: 'basic', yearsOfExperience: 1, icon: 'SiRedis', displayOrder: 4 },
    { id: '16', name: 'Firebase', category: 'database', proficiency: 'basic', yearsOfExperience: 1, icon: 'SiFirebase', displayOrder: 5 },

    // Tools
    { id: '17', name: 'Git', category: 'tool', proficiency: 'advanced', yearsOfExperience: 5, icon: 'FaGitAlt', displayOrder: 1 },
    { id: '18', name: 'Docker', category: 'tool', proficiency: 'intermediate', yearsOfExperience: 2, icon: 'FaDocker', displayOrder: 2 },
    { id: '19', name: 'Maven', category: 'tool', proficiency: 'advanced', yearsOfExperience: 4, icon: 'SiApachemaven', displayOrder: 3 },
    { id: '20', name: 'JUnit', category: 'tool', proficiency: 'expert', yearsOfExperience: 4, icon: 'SiJunit', displayOrder: 4 },
    { id: '21', name: 'IntelliJ IDEA', category: 'tool', proficiency: 'advanced', yearsOfExperience: 5, icon: 'FaTools', displayOrder: 5 },
    { id: '22', name: 'VS Code', category: 'tool', proficiency: 'expert', yearsOfExperience: 3, icon: 'FaCode', displayOrder: 6 }
  ];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      FaJava, SiTypescript, FaCode, FaServer, SiSpringboot, FaReact, SiPostgresql,
      SiMysql, SiMongodb, SiRedis, SiFirebase, FaGitAlt, FaDocker, SiMaven,
      SiJunit5, SiAngular, SiNodedotjs, SiTailwindcss, FaTools
    };
    return iconMap[iconName] || FaCode;
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'basic':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getProficiencyBgColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'basic':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'language':
        return 'Languages';
      case 'framework':
        return 'Frameworks';
      case 'database':
        return 'Databases';
      case 'tool':
        return 'Tools';
      default:
        return category;
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <div id="skills" className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const categoryIcons = {
              language: FaCode,
              framework: FaServer,
              database: FaServer,
              tool: FaTools
            };
            const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || FaCode;

            return (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <CategoryIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {getCategoryLabel(category)}
                  </h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {categorySkills.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Technologies mastered
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Detailed Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-3">
                  {categoryIndex + 1}
                </span>
                {getCategoryLabel(category)}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills
                  .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
                  .map((skill, index) => {
                    const Icon = getIconComponent(skill.icon);
                    return (
                      <motion.div
                        key={skill.id}
                        className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h3>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyBgColor(skill.proficiency)}`}>
                            {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                              style={{
                                width: skill.proficiency === 'expert' ? '90%' :
                                       skill.proficiency === 'advanced' ? '75%' :
                                       skill.proficiency === 'intermediate' ? '50%' : '25%'
                              }}
                            />
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Experience</span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Skills Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {skills.filter(s => s.proficiency === 'expert' || s.proficiency === 'advanced').length}+
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced Technologies
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {Math.max(...skills.map(s => s.yearsOfExperience))}+
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {skills.length}+
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies Mastered
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;