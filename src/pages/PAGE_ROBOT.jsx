import {useState} from "react";

import ROBOT_ENUM from "../assets/Robot";
import { Button } from "../components/Form";
import { ChatMain } from "../components/Chat";

import {talkToRobot, getRobotResponse} from "../API/APIHandler";
import {normalizeResponse} from "../utils/utilFunction";

import {useUser} from "../context/UserContext";

import {toast} from "react-toastify";

import "./PAGE_ROBOT.scss";

const robotHelpMenu = `[Fitur]<br/>
1. Membuat task baru<br/>
2. Melihat daftar task<br/>
3. Melihat deadline n minggu kedepan<br/>
4. Melihat deadline n hari kedepan<br/>
5. Melihat deadline n minggu kedepan untuk tugas jenis tertentu<br/>
6. Melihat deadline n hari kedepan untuk tugas jenis tertentu<br/>
7. Melihat deadline hari ini<br/>
8. Melihat deadline dari suatu task dengan kode matakuliah<br/>
9. Merubah suatu deadline dengan ID tertentu menjadi selesai<br/>
10. Merubah deadline dengan ID tertentu<br/>
[Kata Penting]<br/>
1. Kuis<br/>
2. Ujian<br/>
3. Tucil<br/>
4. Tubees<br/>
5. Praktikum<br/>
6. PR`;

const PAGE_ROBOT = () => {
	const [robotState, setRobotState] = useState(ROBOT_ENUM.HappyRobot);
	const [robotText, setRobotText] = useState(
		"HELLO! Hoping a great day for you! What can i help you with?"
	);
	const [text, setText] = useState("");

	const isHelp = () => {
		let s = text.toLowerCase();
		return s === "help" || (s.includes("bisa") && s.includes("lakukan"));
	};

	const handleSubmit = async () => {
		if (isHelp) {
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
				let chat = normalizeResponse(await getRobotResponse());
				setRobotText(chat.content);
				toast.error("Terjadi kesalahan!");
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
