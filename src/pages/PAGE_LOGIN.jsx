import {useState, useEffect} from "react";

import {LabText, Button} from "../components/Form";
import {useUserUpdate} from "../context/UserContext";

import "./PAGE_LOGIN.scss";

const PAGE_LOGIN = () => {
	const [username,  setUsername] = useState("");
	const [password,  setPassword] = useState("");
	const [page, setPage] = useState("login");

	const {handleLogin, handleSignup, handleCheckUser} = useUserUpdate();

	const login = () => handleLogin({username,password});
	const signup = () => handleSignup({username, password});

	useEffect(async ()=>{
		handleCheckUser();
	},[])

	return (
		<div className='login-container'>
			<div className="form">
				<p className='title'>Login</p>
				<LabText label='Username' text={username} setText={setUsername} />
				<LabText
					label='Password'
					type='password'
					text={password}
					setText={setPassword}
				/>
				{page === "login" ? (
					<>
						<Button text='Login' onClick={login} />
						<div className='basic' onClick={() => setPage("signup")}>
							Don't have an account?
						</div>
					</>
				) : (
					<>
						<Button text='Sign Up' onClick={signup} />
						<div className='basic' onClick={() => setPage("login")}>
							Already have account?
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default PAGE_LOGIN;
