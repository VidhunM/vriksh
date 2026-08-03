/**
 * API Configuration
 * 
 * Frontend Environment Variables (local .env or Vercel/Netlify):
 * - VITE_API_BASE_URL: Base URL of backend server
 * - VITE_API_KEY: Sent in request header 'x-api-key' for backend authentication
 * 
 * Backend Environment Variables (Replit / Server Secrets):
 * - ADMIN_API_KEY: Server-side secret used by Node.js backend to authenticate incoming requests
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://responsible-united-closedsource.replit.app";

export const getHeaders = (extraHeaders = {}) => {
    const headers = { ...extraHeaders };
    const rawKey = import.meta.env.VITE_API_KEY;
    const apiKey = (rawKey && rawKey.trim()) ? rawKey.trim() : "Vriksh#341";
    if (apiKey) {
        headers["x-api-key"] = apiKey;
    }
    return headers;
};

export default API_BASE_URL;
