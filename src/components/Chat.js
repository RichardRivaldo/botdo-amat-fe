import "./Chat.scss";

export const ChatMain = ({chat}) => (
	<div className='chat-box-main'>
		<p className='chat'>{chat}</p>
	</div>
);

export const Chat = ({chat, time, isMe}) => (
	<div className={`chat-box ${isMe ? "me" : "them"}`}>
		<div className='chat-container'>
			<p className='chat'>{chat}</p>
		</div>
		<div className='chat-timestamp'>
			<p className='timestamp'>{time}</p>
		</div>
	</div>
);
