import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add API key to headers
    config.headers['x-rapidapi-host'] = 'api-football-v1.p.rapidapi.com';
    config.headers['x-rapidapi-key'] = API_KEY;

    // You can add additional headers or modify the request here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
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