import React from "react";
import { Button, Card } from "react-bootstrap";
import useStore from "../store/Contexto.jsx";

import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";


 const PlanetsCard = (props) => {
    return (

    <div className="card cardSize" >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.img}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain}</p>
            <a href={props.url} className="btn btn-primary">Learn more!</a>
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
     );
}

export default PlanetsCard;
