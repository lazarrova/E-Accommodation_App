import axios from "axios";
// const baseURL = import.meta.env.MODE === 'development'
//     ? 'http://localhost:8181'
//     : '/api';
let baseURL = "";

const hostname = window.location.hostname;

if (hostname === "localhost") {
    baseURL = "http://localhost:9090";
} else if (hostname === "backend.local") {
    baseURL = "/api";
} else {
    baseURL = "http://backend.local/api";
}

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;