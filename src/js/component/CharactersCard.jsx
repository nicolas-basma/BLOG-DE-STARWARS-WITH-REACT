import React from "react";

const CharactersCard = (props) => {

  
  return (
      <div className="card cardSize">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.img}.jpg`}
          className="card-body"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Gender: {props.gender}</p>
          <p className="card-text">Eyes Color: {props.eye_color}</p>
          <a href={props.url} className="btn btn-primary">
            Learn more!
          </a>
          <i className="far fa-heart"></i>
        </div>
      </div>
  );
};

export default CharactersCard;
