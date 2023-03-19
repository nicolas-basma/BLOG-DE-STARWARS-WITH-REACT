import React from "react";
import { ContextProvider } from "./store/Contexto.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import useStore from "./store/Contexto.jsx";
import { MyNavbar } from "./component/MyNavbar.jsx";
import { Home } from "./views/home";

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
