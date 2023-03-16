import React from 'react';
import { Navbar } from "../component/Navbar.jsx";
import { Outlet } from "react-router";

const Light = () => {
return (
    <>
    <Navbar/>
    <Outlet/>
    </>
)
}


export default Light;