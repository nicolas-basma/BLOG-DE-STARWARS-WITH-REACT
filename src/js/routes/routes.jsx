import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../views/home";
import Light from "../views/Light.jsx";
import ProfileCard from "../component/ProfileCard.jsx";

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
		element: <ProfileCard/>
	}]
	},
])

