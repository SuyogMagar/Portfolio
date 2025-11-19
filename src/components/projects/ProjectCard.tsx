'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types/portfolio';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { formatDate } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'full-stack':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'backend':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'frontend':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'mobile':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'full-stack':
        return 'Full Stack';
      case 'backend':
        return 'Backend';
      case 'frontend':
        return 'Frontend';
      case 'mobile':
        return 'Mobile';
      default:
        return category;
    }
  };

  return (
    <motion.article
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
              <FaStar className="w-3 h-3 mr-1" />
              Featured
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-90">{getCategoryLabel(project.category)}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>Created {formatDate(project.createdAt)}</span>
          {project.featured && <span>⭐ Featured Project</span>}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
        aria-label={`View details for ${project.title}`}
      />
    </motion.article>
  );
};

export default ProjectCard;