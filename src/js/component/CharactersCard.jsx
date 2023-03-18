import React from "react";
import useStore from "../store/Contexto.jsx";

const CharactersCard = (props) => {

  const {listaPersonaje} = useStore();

    const [charData] = listaPersonaje ? listaPersonaje.filter((item) =>  item.result.uid == props.id) : null;
    // console.log(charData.result.gender)
  
  return (
      <div className="card cardSize">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
          className="card-body"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Gender: {charData ? charData.result.properties.gender : null}</p>
          <p className="card-text">Eyes Color: {charData ? charData.result.properties.eye_color : null}</p>
          <a href={charData ? charData.result.properties.url : null} className="btn btn-primary">
            Learn more!
          </a>
          <i className="far fa-heart"></i>
        </div>
      </div>
  );
};

export default CharactersCard;
