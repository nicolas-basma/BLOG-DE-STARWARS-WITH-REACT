import React from "react";

export const Card = (props) => {
    return (
    
    <div className="card cardSize" >
        <div className="card-body">
        <img src={props.source} className="card-img-top" alt="..."/>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}</p>
            <a href={props.href} className="btn btn-primary">Learn more!</a>
            <i className="fa-regular fa-heart"></i>
        </div>
    </div>
     );
}
