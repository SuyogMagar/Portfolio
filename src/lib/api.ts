import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Project, ContactRequest, ContactMessage, ProjectFilter, PaginatedResponse, ApiResponse } from '@/types/portfolio';

// Create axios instance with base configuration
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      // Add any request modifications here
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`API Response: ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      console.error('API Error:', error.response?.data || error.message);

      // Handle common HTTP errors
      if (error.response?.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      } else if (error.response?.status === 500) {
        throw new Error('Server error. Please try again later.');
      } else if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please check your connection and try again.');
      } else {
        throw new Error('An unexpected error occurred. Please try again.');
      }
    }
  );

  return client;
};

const apiClient = createApiClient();

// Projects API
export const projectsApi = {
  // Get all projects with optional filtering
  getProjects: async (filters?: ProjectFilter): Promise<PaginatedResponse<Project>> => {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }

    const response = await apiClient.get(`/projects?${params.toString()}`);
    return response.data.data;
  },

  // Get project by slug/id
  getProject: async (slug: string): Promise<Project> => {
    const response = await apiClient.get(`/projects/${slug}`);
    return response.data.data;
  },

  // Get featured projects only
  getFeaturedProjects: async (): Promise<Project[]> => {
    const response = await apiClient.get('/projects/featured');
    return response.data.data;
  },

  // Search projects
  searchProjects: async (query: string): Promise<Project[]> => {
    const response = await apiClient.get(`/projects?search=${encodeURIComponent(query)}`);
    return response.data.data.items;
  }
};

// Contact API
export const contactApi = {
  // Submit contact form
  submitContact: async (contactData: ContactRequest): Promise<{ id: string; createdAt: string }> => {
    const response = await apiClient.post('/contact', contactData);
    return response.data.data;
  },

  // Get all contact messages (admin only)
  getMessages: async (): Promise<ContactMessage[]> => {
    const response = await apiClient.get('/contact');
    return response.data.data;
  }
};

// Analytics API
export const analyticsApi = {
  // Track page visit
  trackVisit: async (pageUrl: string): Promise<void> => {
    await apiClient.post('/analytics/visit', { pageUrl });
  },

  // Get analytics stats (admin only)
  getStats: async () => {
    const response = await apiClient.get('/analytics/visit');
    return response.data.data;
  }
};

// Utility function to track page visits
export const trackPageVisit = (pageUrl: string): void => {
  // Track in background, don't await to avoid blocking UI
  analyticsApi.trackVisit(pageUrl).catch(console.error);
};

// Error handling utility
export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// Safe API call wrapper
export const safeApiCall = async <T>(
  apiCall: () => Promise<T>
): Promise<{ data?: T; error?: string }> => {
  try {
    const data = await apiCall();
    return { data };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
};

// Export default client for custom requests
export default apiClient;