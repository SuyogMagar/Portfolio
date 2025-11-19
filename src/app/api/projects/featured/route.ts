import { NextResponse } from 'next/server';
import { Project } from '@/types/portfolio';

// Sample featured projects (in production, this would come from a database)
const featuredProjects: Project[] = [
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

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: featuredProjects,
      count: featuredProjects.length
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