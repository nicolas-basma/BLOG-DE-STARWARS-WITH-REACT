import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home } from "../views/home";
import Light from "../views/Light.jsx";
import ProfileCard from "../component/ProfileCard.jsx";
import ProfileVehicle from "../component/ProfileVehicle.jsx";
import ProfilePlanets from "../component/ProfilePlanets.jsx";


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
	},
	{
		path: '/vehicles/:id',
		element: <ProfileVehicle/>
	},
	{
		path: '/planets/:id',
		element: <ProfilePlanets/>
	}

]
	},
])

