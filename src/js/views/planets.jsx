
import React from "react";

const Planets = () =>{
    const [planets,setplanets]= useState([]);
    const getPlanets=() => {
         fetch("https://www.swapi.tech/api/planets")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
    
    return(
    <>
        


    </>
    )
}

export default Planets;