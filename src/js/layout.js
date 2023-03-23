import React from "react";
import { ContextProvider } from "./store/Contexto.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { MyNavbar } from "./component/MyNavbar.jsx";

const Layout = () => {

	return (
		<div>
			
			<ContextProvider>
			
				<RouterProvider router={router}>
				<MyNavbar/>
					
				</RouterProvider>

			</ContextProvider>
		</div>
	);
};

export default Layout;
