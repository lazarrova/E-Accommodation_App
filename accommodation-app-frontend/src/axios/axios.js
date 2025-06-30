import axios from "axios";
// const baseURL = import.meta.env.MODE === 'development'
//     ? 'http://localhost:8181'
//     : '/api';
let baseURL = "";

const hostname = window.location.hostname;

if (hostname === "localhost") {
    baseURL = "http://localhost:8181";
} else if (hostname === "backend.local") {
    baseURL = "/api";
} else {
    baseURL = "http://backend.local/api"; // или остави нешто како default ако треба
}

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:8181, //with docker-compose
    //baseURL: "/api", //with kubernetes
    //baseURL: "https://accommodation-backend.onrender.com", //with deployment
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;