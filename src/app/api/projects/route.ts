import { NextRequest, NextResponse } from 'next/server';
import { Project, ProjectFilter, PaginatedResponse } from '@/types/portfolio';

// Sample project data (in production, this would come from a database)
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
  },
  {
    id: '4',
    title: 'Task Management API',
    description: 'RESTful API for task management with team collaboration features',
    longDescription: 'A comprehensive REST API for task management that supports team collaboration, real-time updates, and advanced filtering. Built with clean architecture principles.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'JWT'],
    category: 'backend',
    featured: false,
    githubUrl: 'https://github.com/suyogmagar/task-api',
    imageUrl: '/projects/task-api.jpg',
    challenges: [
      'Implementing real-time updates',
      'Managing concurrent task modifications',
      'Designing flexible filtering system'
    ],
    solutions: [
      'Used WebSocket notifications',
      'Implemented optimistic locking',
      'Created comprehensive query DSL'
    ],
    results: [
      'Real-time sync across 500+ users',
      '99.99% data consistency',
      'Sub-50ms query response times'
    ],
    createdAt: '2023-07-15'
  },
  {
    id: '5',
    title: 'Portfolio Dashboard',
    description: 'Analytics dashboard for portfolio performance tracking',
    longDescription: 'A React-based dashboard that provides real-time analytics for portfolio performance, visitor tracking, and engagement metrics with interactive charts.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    category: 'frontend',
    featured: false,
    githubUrl: 'https://github.com/suyogmagar/portfolio-dashboard',
    liveUrl: 'https://dashboard.suyogmagar.com',
    imageUrl: '/projects/portfolio-dashboard.jpg',
    challenges: [
      'Real-time data visualization',
      'Handling large datasets efficiently',
      'Creating responsive chart layouts'
    ],
    solutions: [
      'Implemented virtual scrolling',
      'Used data aggregation pipelines',
      'Created responsive grid system'
    ],
    results: [
      'Handles 1M+ data points smoothly',
      '60fps chart animations',
      'Mobile-optimized interface'
    ],
    createdAt: '2023-05-20'
  }
];

function filterProjects(projects: Project[], filters: ProjectFilter): Project[] {
  let filtered = [...projects];

  // Category filter
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(project => project.category === filters.category);
  }

  // Featured filter
  if (filters.featured) {
    filtered = filtered.filter(project => project.featured);
  }

  // Technology filter
  if (filters.technologies && filters.technologies.length > 0) {
    filtered = filtered.filter(project =>
      filters.technologies!.some(tech =>
        project.technologies.some(projectTech =>
          projectTech.toLowerCase().includes(tech.toLowerCase())
        )
      )
    );
  }

  // Search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(project =>
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.longDescription.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
  }

  // Sorting
  if (filters.sortBy) {
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (filters.sortBy) {
        case 'date':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'name':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'featured':
          comparison = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          break;
      }

      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  return filtered;
}

function paginateResults(projects: Project[], page: number = 1, limit: number = 10): PaginatedResponse<Project> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const items = projects.slice(startIndex, endIndex);

  return {
    items,
    total: projects.length,
    page,
    limit,
    totalPages: Math.ceil(projects.length / limit)
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const filters: ProjectFilter = {
      category: searchParams.get('category') || undefined,
      featured: searchParams.get('featured') === 'true',
      search: searchParams.get('search') || undefined,
      sortBy: (searchParams.get('sortBy') as any) || 'date',
      sortOrder: (searchParams.get('sortOrder') as any) || 'desc',
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10'),
      technologies: searchParams.get('technologies')?.split(',').filter(Boolean) || []
    };

    // Apply filters
    const filteredProjects = filterProjects(sampleProjects, filters);

    // Paginate results
    const paginatedResults = paginateResults(
      filteredProjects,
      filters.page,
      filters.limit
    );

    return NextResponse.json({
      success: true,
      data: paginatedResults
    });

  } catch (error) {
    console.error('Projects API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch projects'
      },
      { status: 500 }
    );
  }
}

// GET /api/projects/featured - Get featured projects only
export async function GET_FEATURED() {
  try {
    const featuredProjects = sampleProjects.filter(project => project.featured);

    return NextResponse.json({
      success: true,
      data: featuredProjects
    });
  } catch (error) {
    console.error('Featured projects API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch featured projects'
      },
      { status: 500 }
    );
  }
}