import React from "react";
import { ContextProvider } from "./store/Contexto.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import useStore from "./store/Contexto.jsx";
import { Navbar } from "./component/Navbar.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
// import injectContext from "./store/appContext";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	// //the basename is used when your project is published in a subdirectory and not in the root of the domain
	// // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	return (
		<div>
			
			<ContextProvider>
			
				<RouterProvider router={router}>
				<Navbar/>
					
				</RouterProvider>

			</ContextProvider>
		</div>
	);
};

export default Layout;
