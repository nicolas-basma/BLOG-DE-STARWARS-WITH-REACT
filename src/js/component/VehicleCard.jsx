import React from "react";
import useStore from "../store/Contexto.jsx";

 const VehicleCard = (props) => {

    const {listVehicles} = useStore();

     const [vehiclesData] = listVehicles ? listVehicles.filter( item =>  item.result.uid == props.id) : null;
     console.log(vehiclesData)
     return (

    <div className="card cardSize" >
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Model: {vehiclesData ? vehiclesData.result.properties.model : 'loading..'}</p>
            <p className="card-text">Vehicle class: {vehiclesData ? vehiclesData.result.properties.vehicle_class : 'loading..'}</p>
            <a href={vehiclesData ? vehiclesData.result.properties.url : 'loading..'} className="btn btn-primary">Learn more!</a>
            <i className="far fa-heart"></i>
        </div>
    </div>
     );
}

export default VehicleCard;