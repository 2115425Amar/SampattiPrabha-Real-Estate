import axios from 'axios';

const apiRequest = axios.create({
    baseURL: "https://majarproject-2-1.onrender.com/api",
    withCredentials:true,
});

export default apiRequest;