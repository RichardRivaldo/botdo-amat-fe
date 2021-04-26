import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from "./routes/RouteApp";
import Template from "./template/Template.jsx";

import "./styles/base.scss";

const App = () => {
	return (
		<Router>
			<Template>
				<AppRoute />
			</Template>
		</Router>
	);
};

export default App;
