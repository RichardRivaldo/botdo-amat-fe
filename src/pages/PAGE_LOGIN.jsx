import {useState} from "react";
import {LabText, Button} from "../components/Form";

import {login} from "../API/APIHandler";

import "./PAGE_LOGIN.scss";

const PAGE_LOGIN = () => {
	const [username,  setUsername] = useState("");
	const [password,  setPassword] = useState("");

	const handleLogin = async() =>{
		let res = await login({username,password});
	}

	return (
		<div className='login-container'>
			<form>
				<p className='title'>Login</p>
				<LabText label='Username' text={username} setText={setUsername} />
				<LabText
					label='Password'
					type='password'
					text={password}
					setText={setPassword}
				/>
				<Button text="Login" onClick={handleLogin}/>
			</form>
		</div>
	);
};

export default PAGE_LOGIN;
