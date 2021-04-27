import MessageIcon from "./SVG/MessageIcon.svg";
import HomeIcon from "./SVG/HomeIcon.svg";

const wrapImg = (path) => <img className='icon' src={path} alt={"icon"}></img>;

const ICON = {
	MessageIcon: wrapImg(MessageIcon),
	HomeIcon: wrapImg(HomeIcon),
};

export default ICON;
