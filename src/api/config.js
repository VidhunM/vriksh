/**
 * API Configuration
 * 
 * To override the default backend URL (e.g., when deploying to Vercel):
 * Create a .env file locally or set an Environment Variable in Vercel:
 * VITE_API_BASE_URL=https://your-production-backend.com
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://vrikshback.onrender.com/";

export default API_BASE_URL;
