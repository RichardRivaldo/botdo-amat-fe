import {useLocation, Link} from "react-router-dom";
import {useUserUpdate} from "../context/UserContext";
import Icon from "../assets/Icon";

const Template = ({children}) => (
	<div className='main-container'>
		<Header />
		<div className='content-container'>{children}</div>
	</div>
);

const Header = () => {
	const location = useLocation();
	const {handleLogout} = useUserUpdate();
	let nav;
	switch (location.pathname) {
		case "/dashboard":
			nav = (
				<div className='navbar'>
					<Link to='/chat'>{Icon.MessageIcon}</Link>
				</div>
			);
			break;
		case "/chat":
			nav = (
				<div className='navbar'>
					<Link to='/dashboard'>{Icon.HomeIcon}</Link>
				</div>
			);
			break;
	}
	let logout;
	if (location.pathname !== "/") {
		logout = (
			(
			<div className='logout' onClick={()  =>  handleLogout()}>
				{Icon.LogoutIcon}
			</div>
		)
		);
	}
	return (
		<header>
			{logout}
			{nav}
			<p className='title'>Botdo Amat</p>
			<p className='basic'>YOUR NUMBER 2 BEST VIRTUAL ASSISTANT</p>
			<div className='horizontal-bar'></div>
		</header>
	);
};

export default Template;
