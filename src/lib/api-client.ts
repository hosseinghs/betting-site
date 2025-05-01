import axios, { AxiosError } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
const BASE_URL = 'https://v3.football.api-sports.io';

// Maximum number of retries
const MAX_RETRIES = 3;
// Base delay for exponential backoff (in milliseconds)
const BASE_DELAY = 1000;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add additional headers or modify the request here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Helper function to calculate delay for exponential backoff
const getRetryDelay = (retryCount: number) => {
  return Math.min(BASE_DELAY * Math.pow(2, retryCount), 10000); // Max 10 seconds
};

// Response interceptor with retry logic
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config;
    if (!config) return Promise.reject(error);

    // Get the current retry count
    const retryCount = (config as any).__retryCount || 0;

    // Check if we should retry the request
    if (
      retryCount < MAX_RETRIES &&
      (error.response?.status === 429 || error.response?.status === 403)
    ) {
      // Increment retry count
      (config as any).__retryCount = retryCount + 1;

      // Calculate delay for exponential backoff
      const delay = getRetryDelay(retryCount);

      // Log retry attempt
      console.log(`Retrying request (${retryCount + 1}/${MAX_RETRIES}) after ${delay}ms`);

      // Wait for the calculated delay
      await new Promise(resolve => setTimeout(resolve, delay));

      // Retry the request
      return apiClient(config);
    }

    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized: Please check your API key');
          break;
        case 403:
          console.error('Forbidden: You do not have permission to access this resource');
          break;
        case 429:
          console.error('Too Many Requests: You have exceeded your API rate limit');
          break;
        default:
          console.error('API Error:', error.response.data || error.message);
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
); 