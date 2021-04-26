import "./Form.scss";

export const LabText = ({label, text, setText, type = "text"}) => (
	<div className='labtext'>
		<label>{label}</label>
		<input
			type={type}
			value={text}
			onChange={(e) => setText(e.target.value)}
		></input>
	</div>
);

export const Button = ({text, onClick}) => (
	<button className='button' onClick={() => onClick()}>
		{text}
	</button>
);
