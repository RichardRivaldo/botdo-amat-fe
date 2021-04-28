import React, {useContext, useState, useEffect} from "react";
import {login, signup, logout, checkUser} from "../API/APIHandler";
import {normalizeResponse, setToken, getToken} from "../utils/utilFunction";

import {toast} from "react-toastify";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const useUser = () => useContext(UserContext);
export const useUserUpdate = () => useContext(UserUpdateContext);

export const UserProvider = ({children}) => {
	const [user, setUser] = useState(getToken());

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
		try {
			const res = normalizeResponse(await signup({username, password}));
			toast.success(`Berhasil signup! Selamat datang ${username}`);
			setTimeout(() => {
				setUser(res);
				setToken(res.token);
				window.location.href = "/dashboard";
			}, 1000);
			return res;
		} catch (err) {
			toast.error("Terjadi kesalahan pada server!");
			toast.error(err.msg);
		}
	};

	const handleLogout = async () => {
		logout();
		setUser(null);
		window.location.href = "/";
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

	useEffect(()  =>  {
		async function asyncUseEffect() { await handleCheckUser() }

		asyncUseEffect();
	},  []);

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
