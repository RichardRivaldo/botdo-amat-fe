import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./routes";

const AppRoute = () => (
	<Switch>
		{routes.map(({path, component: Component}) => (
			<Route
				exact
				key={path}
				path={path}
				render={(props) => (
					<Suspense fallback={""}>
						<Component {...props} />
					</Suspense>
				)}
			/>
		))}
	</Switch>
);

export default AppRoute;
