import React, {Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./routes";

import {ProtectedRoute} from "./ProtectedRoute";
import {NormalRoute} from "./NormalRoute";

const AppRoute = () => (
	<Switch>
		{routes.map(({path, component: Component, isNeedLogin}) =>
			!isNeedLogin ? (
				<NormalRoute exact key={path} path={path} component={Component} />
			) : (
				<ProtectedRoute exact key={path} path={path} component={Component} />
			)
		)}
	</Switch>
);

export default AppRoute;