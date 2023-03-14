import React from "react";

export const Card = (props) => {
    return (
    
    <div className="card cardSize" >
            <img src={props.source} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}</p>
            <a href={props.href} className="btn btn-primary">Learn more!</a>
        </div>
    </div>
     );
}
