import React, {useContext, useState} from "react";
import {login, signup, logout, checkUser} from "../API/APIHandler";
import {normalizeResponse, setToken} from "../utils/utilFunction";

import {toast} from "react-toastify";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const useUser = () => useContext(UserContext);
export const useUserUpdate = () => useContext(UserUpdateContext);

export const UserProvider = ({children}) => {
	const [user, setUser] = useState(null);

	const handleLogin = async ({username, password}) => {
		const res = normalizeResponse(await login({username, password}));
		if (res) {
			toast.success("Sukses login!");
			setTimeout(() => {
				setUser(res);
				setToken(res.token);
				window.location.href = "/dashboard";
			}, 1000);
		}
	};

	const handleSignUp = async ({username, password}) => {
		const res = await signup({username, password});
		if (res) {
			console.log(res);
		} else {
			console.log("GAGAL!");
		}
	};

	const handleLogout = async () => {
		logout();
		setUser(null);
	};

	const handleCheckUser = async () => {
		try {
			const res = await checkUser();
			setUser(res.data);
			return res;
		} catch (err) {
			toast.error(err.msg);
		}
	};

	return (
		<UserContext.Provider value={user}>
			<UserUpdateContext.Provider
				value={{
					setUser,
					handleLogin,
					handleSignUp,
					handleLogout,
					handleCheckUser,
				}}
			>
				{children}
			</UserUpdateContext.Provider>
		</UserContext.Provider>
	);
};
