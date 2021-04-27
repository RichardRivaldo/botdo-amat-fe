import {useState} from "react";

import ROBOT_ENUM from "../assets/Robot";
import { Button } from "../components/Form";
import { ChatMain } from "../components/Chat";

import {talkToRobot, getRobotResponse} from "../API/APIHandler";
import {normalizeResponse} from "../utils/utilFunction";

import {toast} from "react-toastify";

import "./PAGE_ROBOT.scss";

const PAGE_ROBOT = () => {
	const [robotState, setRobotState] = useState(ROBOT_ENUM.HappyRobot);
	const [robotText, setRobotText] = useState(
		"HELLO! Hoping a great day for you! What can i help you with?"
	);
	const [text, setText] = useState("");

	const handleSubmit = async () => {
		try {
			setRobotState(ROBOT_ENUM.SearchRobot);
			const res = normalizeResponse(await talkToRobot(text));
			setRobotState(ROBOT_ENUM.IdeaRobot);
			let chat = normalizeResponse(await getRobotResponse());;
			setRobotState(ROBOT_ENUM.HappyRobot);
			setRobotText(chat.content);
		} catch (err) {
			setRobotState(ROBOT_ENUM.SadRobot);
			let chat = normalizeResponse(await getRobotResponse());
			setRobotText(chat.content);
			toast.error("Terjadi kesalahan!");
		}
	};

	return (
		<div className='robot-container'>
			<div className='message-box'>
				<p className='subtitle'>Enter Your Message</p>
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<Button text='Send' onClick={handleSubmit} />
			</div>
			<div className='robot'>
				<ChatMain chat={robotText} />
				<img src={robotState} alt='Robot' />
			</div>
		</div>
	);
};

export default PAGE_ROBOT;
