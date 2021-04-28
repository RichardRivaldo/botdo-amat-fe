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

export const handleError = (err, toast) => {
	if (err.response) {
		const {status} = err.response;
		if (status >= 400 && status < 500) {
			return toast.error("Pesan tidak dikenali!");
		} else {
			return toast.error("Something went wrong!");
		}
	}
	return toast.error("Something went wrong!");
};

export const parseTimeChat = (str) => {
	let temp = new Date(str);
	let d = temp.getDate();
	d = d < 10 ? `0${d}` : d;
	let m = temp.getMonth() + 1;
	m = m < 10 ? `0${m}` : m;
	let y = temp.getFullYear();
	let h = temp.getHours();
	h = h < 10 ? `0${h}` : h;
	let min = temp.getMinutes();
	min = min < 10 ? `0${min}` : min;
	return `${d}-${m}-${y} ${h}.${min}`;
};
