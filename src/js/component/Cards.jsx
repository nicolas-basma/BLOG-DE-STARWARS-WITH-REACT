import React from "react";

 const Cards = (props) => {
    console.log(`props`,props)
    return (

    <div className="card cardSize" >
            <img src={props.source} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">Learn more!</a>
        </div>
    </div>
     );
}

export default Cards;