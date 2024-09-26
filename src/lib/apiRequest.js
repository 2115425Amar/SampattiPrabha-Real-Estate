import axios from 'axios';

const apiRequest = axios.create({
    baseURL: "http://localhost:8000/api",
    // baseURL: "https://majarproject-2-1.onrender.com/api",
    withCredentials:true,
});

export default apiRequest;

// http://localhost:5173/