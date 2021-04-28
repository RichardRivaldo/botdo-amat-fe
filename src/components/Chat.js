import "./Chat.scss";

const normalizeChat = (chat) => {
	let temp = chat.split("<br/>");
	return temp.map((row, i) => <p key={i}>{row}</p>);
};

export const ChatMain = ({chat}) => (
	<div className='chat-box-main'>
		<div className='chat'>{normalizeChat(chat)}</div>
	</div>
);

export const Chat = ({chat, time, mine}) => (
	<div className={`chat-box ${mine ? "me" : "them"}`}>
		<div className='chat-container'>
			<div className='chat'>{normalizeChat(chat)}</div>
		</div>
		<div className='chat-timestamp'>
			<p className='timestamp'>{time}</p>
		</div>
	</div>
);
