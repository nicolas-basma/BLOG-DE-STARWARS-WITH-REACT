import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../views/home";
import { Bla } from "../component/Test.jsx";


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar/>,
		children: [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/Bla',
				element: <Bla/>
		
			}

		]
	},

])


