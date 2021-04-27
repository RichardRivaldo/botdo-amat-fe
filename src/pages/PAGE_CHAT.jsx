import {useState, useEffect} from "react";
import {Chat} from "../components/Chat";
import {getAllChat} from "../API/APIHandler";
import { normalizeResponse } from "../utils/utilFunction";

import {toast} from "react-toastify";

const PAGE_CHAT = () => {
	const [data,setData] = useState(null);

	useEffect(async ()=>{
		try{
			const res = normalizeResponse(await getAllChat());
			setData(res);
		}catch(err){
			toast.error(err.message);
		}
	},[])

	return (
		
		<>
			{data ? data.map((row) => row.isRobot?<Chat chat={row.content} time={row.createdAt}/> : <Chat chat={row.content} time={row.createdAt} mine/> ) : ""}
		</>
	);
};

export default PAGE_CHAT;
