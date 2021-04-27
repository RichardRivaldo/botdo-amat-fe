import API from "./API";

export const login = ({username, password}) => {
	return API.post("/user/login", {username, password});
};

export const signup = ({username, password}) => {
	return API.post("/user/signup", {username, password});
};

export const logout = () => {
	localStorage.removeItem("token");
};

export const checkUser = () => {
	return API.post("/user/check-user");
};

export const getAllChat = () => {
	return API.get("/chat");
};

export const talkToRobot = (content) => {
	return API.post("/task", {content});
};

export const getRobotResponse = () => {
	return API.get("/chat/last-bot-chat");
};