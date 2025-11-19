'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/portfolio';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilters from '@/components/projects/ProjectFilters';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    technologies: [] as string[],
    featured: false,
    search: '',
  });

  useEffect(() => {
    // Load projects - for now using sample data
    const sampleProjects: Project[] = [
      {
        id: '1',
        title: 'AetherStream',
        description: 'Real-time streaming platform with chat functionality',
        longDescription: 'A comprehensive streaming platform that enables real-time video broadcasting with integrated chat features. Built with scalability in mind to handle multiple concurrent streams.',
        technologies: ['Java', 'Spring Boot', 'React', 'WebSockets', 'PostgreSQL'],
        category: 'full-stack',
        featured: true,
        githubUrl: 'https://github.com/suyogmagar/aetherstream',
        liveUrl: 'https://aetherstream.demo.com',
        imageUrl: '/projects/aetherstream.jpg',
        challenges: [
          'Implementing real-time video streaming',
          'Managing concurrent connections',
          'Optimizing chat message delivery'
        ],
        solutions: [
          'Used WebSockets for real-time communication',
          'Implemented connection pooling',
          'Added message queuing system'
        ],
        results: [
          'Successfully handles 1000+ concurrent users',
          'Sub-100ms latency for chat messages',
          '99.9% uptime reliability'
        ],
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        title: 'Huffman_Coder',
        description: 'File compression tool using Huffman coding algorithm',
        longDescription: 'A desktop application that implements the Huffman coding algorithm for lossless data compression. Features an intuitive interface for file selection and compression ratio analysis.',
        technologies: ['Java', 'Swing', 'File I/O', 'Compression algorithms'],
        category: 'backend',
        featured: true,
        githubUrl: 'https://github.com/suyogmagar/huffman-coder',
        imageUrl: '/projects/huffman-coder.jpg',
        challenges: [
          'Implementing efficient Huffman tree generation',
          'Handling large file compression',
          'Creating responsive UI for file operations'
        ],
        solutions: [
          'Used priority queues for optimal tree construction',
          'Implemented streaming compression for large files',
          'Added progress indicators and background processing'
        ],
        results: [
          'Achieved 30-70% compression ratios',
          'Handles files up to 1GB efficiently',
          'User-friendly interface with drag-and-drop'
        ],
        createdAt: '2023-11-20'
      },
      {
        id: '3',
        title: 'Teckniv',
        description: 'Multi-vendor e-commerce platform with inventory management',
        longDescription: 'A full-featured e-commerce platform that supports multiple vendors, comprehensive inventory management, and seamless order processing. Includes admin dashboard for vendor and order management.',
        technologies: ['Spring Boot', 'React', 'MySQL', 'JWT Authentication', 'REST APIs'],
        category: 'full-stack',
        featured: true,
        githubUrl: 'https://github.com/suyogmagar/teckniv',
        liveUrl: 'https://teckniv.com',
        imageUrl: '/projects/teckniv.jpg',
        challenges: [
          'Managing multi-vendor inventory',
          'Implementing secure payment processing',
          'Building responsive admin dashboard'
        ],
        solutions: [
          'Designed robust inventory management system',
          'Integrated secure payment gateways',
          'Created comprehensive admin panel with real-time updates'
        ],
        results: [
          'Onboarded 50+ vendors',
          'Processed 10,000+ orders',
          '99.5% payment success rate'
        ],
        createdAt: '2023-09-10'
      }
    ];

    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(project => project.category === filters.category);
    }

    // Apply featured filter
    if (filters.featured) {
      filtered = filtered.filter(project => project.featured);
    }

    // Apply technology filter
    if (filters.technologies.length > 0) {
      filtered = filtered.filter(project =>
        filters.technologies.some(tech => project.technologies.includes(tech))
      );
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
      );
    }

    setFilteredProjects(filtered);
  }, [projects, filters]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="projects" className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my full-stack development work, featuring real-world applications built with modern technologies.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <ProjectFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              projects={projects}
            />
          </div>

          {/* Projects Grid */}
          <div className="lg:w-3/4">
            {filteredProjects.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters to find more projects.
                </p>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;