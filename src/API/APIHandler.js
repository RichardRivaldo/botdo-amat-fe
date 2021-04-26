import API from "./API";

export const login = ({username, password}) => {
	return API.post("/auth/login", {username, password});
};
