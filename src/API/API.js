import axios from "axios";

import {getToken} from "../utils/utilFunction";

const API = axios.create({
	baseURL: "http://localhost:5000/api",
	timeout: 10000,
	withCredentials: true,
	headers :{
		Authorization : `Bearer ${getToken()}`
	}
});

export default API;
