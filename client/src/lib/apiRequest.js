// D:\WEBDEV\MajorProject\client\src\lib\apiRequest.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  console.warn("VITE_API_URL is not defined in environment variables");
}

const apiRequest = axios.create({
    // baseURL: "http://localhost:8000/api",
    // baseURL: "https://majarproject-2-1.onrender.com/api",
    baseURL: `${baseURL}/api`,
    withCredentials:true,
});

export default apiRequest;

// http://localhost:5173/