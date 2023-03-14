// crear comp de react q va renderizar las crtas
//fetch a la ruta d la info q necesita planets
//la info la meto en usestate q va a ser un array
//mapeo array y el objeto m devuelve nombre,id,url(le hago un fetch dentro del mapeo)
// lo vuelvo a almacenar en una array
//al mapear la segunda array obtengo la info d los props xa ls cards
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