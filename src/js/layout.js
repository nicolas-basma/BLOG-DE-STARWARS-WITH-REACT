import React from "react";
import { ContextProvider } from "./store/Contexto.jsx";
import useStore from "./store/Contexto.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
// import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar.jsx";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	// //the basename is used when your project is published in a subdirectory and not in the root of the domain
	// // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	return (
		<div>
			<ContextProvider>
				<Home/>
			</ContextProvider>
		</div>
	);
};

export default Layout;
