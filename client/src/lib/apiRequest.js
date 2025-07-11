// D:\WEBDEV\MajorProject\client\src\lib\apiRequest.js
import axios from 'axios';
// import dotenv from 'dotenv';

const baseURL = import.meta.env.VITE_API_URL;

const apiRequest = axios.create({
    // baseURL: "http://localhost:8000/api",
    // baseURL: "https://majarproject-2-1.onrender.com/api",
    baseURL: `${baseURL}/api`,
    // baseURL: `${process.env.REACT_APP_API}/api`,
    withCredentials:true,
});

export default apiRequest;

// http://localhost:5173/