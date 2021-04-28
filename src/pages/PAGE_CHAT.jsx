import {useState, useEffect, useRef} from "react";
import {Chat} from "../components/Chat";
import {getAllChat} from "../API/APIHandler";
import { normalizeResponse } from "../utils/utilFunction";
import {toast} from "react-toastify";
import ScrollableFeed from "react-scrollable-feed";

import "./PAGE_CHAT.scss";

const PAGE_CHAT = () => {
	const [data,setData] = useState(null);
	const bottom = useRef(null);

	useEffect(() => {
		const fetchData = async() => {
			try {
				const res = normalizeResponse(await getAllChat());
				setData(res);
			} catch (err) {
				toast.error(err.message);
			}
		}
		fetchData();
	}, []);

	return (
		<ScrollableFeed name='scroll-container' className='chat-container'>
			{data
				? data.map((row, i) =>
						row.isRobot ? (
							<Chat key={i} chat={row.content} time={row.createdAt} />
						) : (
							<Chat key={i} chat={row.content} time={row.createdAt} mine />
						)
				  )
				: ""}
			<div name='bottom' ref={bottom}></div>
		</ScrollableFeed>
	);
};

export default PAGE_CHAT;
