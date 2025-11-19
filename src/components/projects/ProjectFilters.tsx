'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/portfolio';
import { FaFilter, FaTimes } from 'react-icons/fa';

interface ProjectFiltersProps {
  filters: {
    category: string;
    technologies: string[];
    featured: boolean;
    search: string;
  };
  onFilterChange: (filters: any) => void;
  projects: Project[];
}

const ProjectFilters = ({ filters, onFilterChange, projects }: ProjectFiltersProps) => {
  const [allTechnologies, setAllTechnologies] = useState<string[]>([]);

  useEffect(() => {
    // Extract all unique technologies from projects
    const technologies = Array.from(
      new Set(projects.flatMap(project => project.technologies))
    ).sort();
    setAllTechnologies(technologies);
  }, [projects]);

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handleTechnologyToggle = (technology: string) => {
    const newTechnologies = filters.technologies.includes(technology)
      ? filters.technologies.filter(t => t !== technology)
      : [...filters.technologies, technology];
    onFilterChange({ ...filters, technologies: newTechnologies });
  };

  const handleFeaturedToggle = () => {
    onFilterChange({ ...filters, featured: !filters.featured });
  };

  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search });
  };

  const clearFilters = () => {
    onFilterChange({
      category: '',
      technologies: [],
      featured: false,
      search: '',
    });
  };

  const hasActiveFilters = filters.category || filters.technologies.length > 0 || filters.featured || filters.search;

  const categories = [
    { value: '', label: 'All Projects' },
    { value: 'full-stack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'mobile', label: 'Mobile' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <FaFilter className="w-4 h-4 mr-2" />
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
          >
            <FaTimes className="w-3 h-3 mr-1" />
            Clear All
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Search Projects
        </label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search by name, description, or tech..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={filters.category === category.value}
                onChange={() => handleCategoryChange(category.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Featured Filter */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.featured}
            onChange={handleFeaturedToggle}
            className="mr-2 text-blue-600 focus:ring-blue-500 rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Featured Projects Only
          </span>
        </label>
      </div>

      {/* Technologies Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Technologies
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allTechnologies.map((tech) => (
            <label key={tech} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.technologies.includes(tech)}
                onChange={() => handleTechnologyToggle(tech)}
                className="mr-2 text-blue-600 focus:ring-blue-500 rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filters.technologies.length > 0 && `${filters.technologies.length} tech${filters.technologies.length > 1 ? 's' : ''} selected`}
            {filters.category && ` • ${categories.find(c => c.value === filters.category)?.label}`}
            {filters.featured && ` • Featured only`}
            {filters.search && ` • Search active`}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;