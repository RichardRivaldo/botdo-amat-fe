import MessageIcon from "./SVG/MessageIcon.svg";
import HomeIcon from "./SVG/HomeIcon.svg";
import LogoutIcon from "./SVG/LogoutIcon.svg";

const wrapImg = (path) => <img className='icon' src={path} alt={"icon"}></img>;

const ICON = {
	MessageIcon: wrapImg(MessageIcon),
	HomeIcon: wrapImg(HomeIcon),
	LogoutIcon: wrapImg(LogoutIcon),
};

export default ICON;
