import React from 'react';
import { MyNavbar } from '../component/MyNavbar.jsx';
import { Outlet } from "react-router";

const Light = () => {
return (
    <>
    <MyNavbar/>
    <Outlet/>
    </>
)
}


export default Light;