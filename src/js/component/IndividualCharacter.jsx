import React, { useContext } from "react";
import { useParams } from "react-router";
import useStore from "../store/Contexto.jsx";

export const Bla = () => {
    const params = useParams();

    const {listPeople} = useStore();

    console.log(`listpeople`,listPeople);
    
    
    return (
        <>
        <h1>HEllooooo</h1>
        </>
    )
}