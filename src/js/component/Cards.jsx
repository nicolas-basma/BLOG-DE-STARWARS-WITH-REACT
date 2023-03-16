import React from "react";

 const Cards = (props) => {
    return (

    <div className="card cardSize" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.img}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Eyes Color:  {props.eyes}</p>
            <a href={props.url} className="btn btn-primary">Learn more!</a>
        </div>
    </div>
     );
}

export default Cards;