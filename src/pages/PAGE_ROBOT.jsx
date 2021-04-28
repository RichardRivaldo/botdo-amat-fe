import {useState} from "react";

import ROBOT_ENUM from "../assets/Robot";
import {Button} from "../components/Form";
import {ChatMain} from "../components/Chat";

import {talkToRobot, getRobotResponse} from "../API/APIHandler";
import {normalizeResponse, handleError} from "../utils/utilFunction";
import {robotHelpMenu} from "../utils/const";

import {toast} from "react-toastify";

import "./PAGE_ROBOT.scss";

const PAGE_ROBOT = () => {
	const [robotState, setRobotState] = useState(ROBOT_ENUM.HappyRobot);
	const [robotText, setRobotText] = useState(
		"HALO! Semoga harimu menyenangkan!! Apakah ada yang bisa saya bantu?"
	);
	const [text, setText] = useState("");

	const isHelp = () => {
		let s = text.toLowerCase();
		return s === "help" || (s.includes("bisa") && s.includes("lakukan"));
	};

	const handleSubmit = async () => {
		if (isHelp()) {
			setRobotText(robotHelpMenu);
		} else {
			try {
				setRobotState(ROBOT_ENUM.SearchRobot);
				normalizeResponse(await talkToRobot(text));
				setRobotState(ROBOT_ENUM.IdeaRobot);
				let chat = normalizeResponse(await getRobotResponse());
				setRobotState(ROBOT_ENUM.HappyRobot);
				setRobotText(chat.content);
			} catch (err) {
				setRobotState(ROBOT_ENUM.SadRobot);
				setRobotText("Maaf! Pesan tidak dikenali!");
				handleError(err, toast);
			}
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
