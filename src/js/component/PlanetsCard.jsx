import React from "react";
import useStore from "../store/Contexto.jsx";


 const PlanetsCard = (props) => {

    const {listPlanets} = useStore();

    const [dataPlanets] = listPlanets ? listPlanets.filter((item) => item.result.uid == props.id) : null;

    return (

    <div className="card cardSize" >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Population: {dataPlanets ? dataPlanets.result.properties.population : 'loading..'}</p>
            <p className="card-text">Terrain: {dataPlanets ? dataPlanets.result.properties.terrain : 'loading..'}</p>
            <a href={props.url} className="btn btn-primary">Learn more!</a>
            <i className="far fa-heart"></i>
        </div>
    </div>
     );
}

export default PlanetsCard;