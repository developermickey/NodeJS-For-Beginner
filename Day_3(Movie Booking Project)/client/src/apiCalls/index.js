import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8082", // No trailing slash!
    headers: {
        "Content-Type": 'application/json'
    } 
});