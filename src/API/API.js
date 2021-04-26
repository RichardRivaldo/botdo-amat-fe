import axios from "axios";

const API = axios.create({
	baseURL: "localhost:5000/api",
	timeout: 1000,
	withCredentials: true,
});

export default API;
