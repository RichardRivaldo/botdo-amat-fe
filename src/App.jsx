import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from "./routes/RouteApp";
import Template from "./template/Template.jsx";
import {UserProvider} from "./context/UserContext";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/base.scss";

const App = () => {
	return (
		<>
			<UserProvider>
				<Router>
					<Template>
						<AppRoute />
					</Template>
				</Router>
			</UserProvider>
			<ToastContainer />
		</>
	);
};

export default App;
