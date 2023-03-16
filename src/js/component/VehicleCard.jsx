import React from "react";

 const VehicleCard = (props) => {
    return (

    <div className="card cardSize" >
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.img}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Model: {props.model}</p>
            <p className="card-text">Vehicle class: {props.vehicleClass}</p>
            <a href={props.url} className="btn btn-primary">Learn more!</a>
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
     );
}

export default VehicleCard;