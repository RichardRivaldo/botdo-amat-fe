import {lazy} from "react";

const PAGE_LOGIN = lazy(() => import("../pages/PAGE_LOGIN"));
const PAGE_CHAT = lazy(() => import("../pages/PAGE_CHAT"));
const PAGE_ROBOT = lazy(() => import("../pages/PAGE_ROBOT"));

const createRoute = (label, path, component, isNeedLogin) => {
	return {label, path, component, isNeedLogin};
};

export const routes = [
	createRoute("Login", "/", PAGE_LOGIN, false),
	createRoute("Chat", "/chat", PAGE_CHAT, true),
	createRoute("Robot", "/dashboard", PAGE_ROBOT, true),
];
