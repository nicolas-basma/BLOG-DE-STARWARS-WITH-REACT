import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../views/home";
import { Bla } from "../component/IndividualCharacter.jsx";
import Light from "../views/Light.jsx";
import { element } from "prop-types";

export const router = createBrowserRouter([
	{
		path: '/',
		element:<Light/>,
		children:[
	
	{
		path: '/',
		element: <Home/>
	},
	{
		path: '/characters/:id',
		element: <Bla/>
	}]
	},
])


