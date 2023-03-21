import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";



const CharactersCard = (props) => {
  const { listPeople } = useStore();

  const [charData] = listPeople
    ? listPeople.filter((item) => item.result.uid == props.id)
    : null;

  return (
    <div id="carousel" className="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="card cardSize">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
              className="card-body"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Gender:{" "}
                {charData ? charData.result.properties.gender : "loading.."}
              </p>
              <p className="card-text">
                Eyes Color:{" "}
                {charData ? charData.result.properties.eye_color : "loading.."}
              </p>
              <a
                href={charData ? charData.result.properties.url : "loading.."}
                className="btn"
              >
                Learn more!
              </a>
              <button className="botonicono">
                <img
                  className="icono"
                  src= {resistenciaImage}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
