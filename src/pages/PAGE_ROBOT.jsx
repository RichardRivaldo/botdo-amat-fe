import {useState} from "react";

import ROBOT_ENUM from "../assets/Robot";
import { Button } from "../components/Form";
import { ChatMain } from "../components/Chat";

import "./PAGE_ROBOT.scss";

const PAGE_ROBOT = () => {
	const [robotState, setRobotState] = useState(ROBOT_ENUM.HappyRobot);
	const [robotText, setRobotText] = useState(
		"HELLO! Hoping a great day for you! What can i help you with?"
	);

	const handleSubmit = () => {

	}

	return (
		<div className="robot-container">
			<div className="message-box">
				<p className="subtitle">Enter Your Message</p>
				<textarea></textarea>
				<Button text="Send" onClick={handleSubmit}/>
			</div>
			<div className="robot">
				<ChatMain chat={robotText}/>
				<img src={robotState} alt="Robot"/>
			</div>
		</div>
	);
};

export default PAGE_ROBOT;
