import React from "react";
import useStore from "../store/Contexto.jsx";

const CharactersCard = (props) => {

  const {listPeople} = useStore();

  const [charData] = listPeople ? listPeople.filter((item) =>  item.result.uid == props.id) : null;
  
  return (
      <div className="card cardSize">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
          className="card-body"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Gender: {charData ? charData.result.properties.gender : 'loading..'}</p>
          <p className="card-text">Eyes Color: {charData ? charData.result.properties.eye_color : 'loading..'}</p>
          <a href={charData ? charData.result.properties.url : 'loading..'} className="btn btn-primary">
            Learn more!
          </a>
          <i className="far fa-heart"></i>
        </div>
      </div>
  );
};

export default CharactersCard;
