export const normalizeResponse = (res) => {
	if (res.data.data) return res.data.data;
	if (res.data) return res.data;
	return res;
};

export const timeout = (cb, ms = 1000) => {
	setTimeout(() => {
		cb();
	}, ms);
};

export const setToken = (token) => {
	localStorage.setItem("token", token);
};

export const getToken = () => {
	const token = localStorage.getItem("token");
	return token;
};
