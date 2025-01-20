
import axios from "axios";

const API_URL = "http://localhost:3000";

const axiosHttp = axios.create({
    baseURL: `${API_URL}`,
});

axiosHttp.interceptors.request.use(
    (config) => {
        const token = "Token here";
        return {
            ...config,
            headers: {
                ...(token && { Authorization: `Bearer ${token}` }),
                ...config.headers,
            },
        };
    },
    (error) => Promise.reject(error)
);

axiosHttp.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized: Redirecting to login...");

        }
        return Promise.reject(error);
    }
);

export default axiosHttp;
