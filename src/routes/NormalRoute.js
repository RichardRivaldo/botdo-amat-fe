import {Suspense} from "react";
import {Redirect, Route} from "react-router-dom";
import {useUser} from "../context/UserContext";

export const NormalRoute = ({component: Component, ...rest}) => {
	const user = useUser();
	return (
		<Route
			{...rest}
			render={(props) =>
				user !== null ? (
					<Redirect to={{pathname: "/dashboard"}} />
				) : (
					<Suspense fallback='...'>
						<Component {...props} />
					</Suspense>
				)
			}
		/>
	);
};
