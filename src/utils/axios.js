import axios from "axios";

const API_URL = "https://server-1-pwpn.onrender.com"; // Replace with your actual API URL

const axiosHttp = axios.create({
    baseURL: `${API_URL}`,
});

// Request Interceptor to add token to headers if present
axiosHttp.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("userToken"); // Get token from localStorage
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // Add token to Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor to handle 401 Unauthorized errors
axiosHttp.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Clear token from localStorage if it's invalid
            localStorage.removeItem("userToken");
            console.error("Unauthorized: Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export default axiosHttp;
