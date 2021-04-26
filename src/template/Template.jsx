const Template = ({children}) => (
	<div className='main-container'>
		<Header />
		<div className='content-container'>{children}</div>
	</div>
);

const Header = () => (
	<header>
		<p className='title'>Botdo Amat</p>
		<p className='subtitle'>YOUR NUMBER 2 BEST VIRTUAL ASSISTANT</p>
		<div className='horizontal-bar'></div>
	</header>
);

export default Template;
