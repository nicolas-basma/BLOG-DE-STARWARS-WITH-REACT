import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../store/Contexto.jsx";
import { Card } from "react-bootstrap";
import resistenciaImage from "../../img/resistencia.jpg";
import { useNavigate } from "react-router";
import { imgTatooine } from "../store/Store.js";

const PlanetsCard = (props) => {
  const { handleClick, favorite } = useStore();
  const navigate = useNavigate();

  const btnLiked = favorite.find((item) => item.name === props.name);

  const handleNavigatePlanet = () => {
    navigate(`/planets/${props.id}`);
  };

  const tatooine = props.id == '1';

  return (
    <Card>
      <Card.Img
        className="imgPlanets"
        variant="top"
        src={ tatooine ? imgTatooine : `https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Population:{props.population}</Card.Text>
        <Card.Text>Terrain:{props.terrain}</Card.Text>
        <Button variant="primary" onClick={handleNavigatePlanet}>
          Learn more!
        </Button>
        <Button
          className={btnLiked ? "botoniconoLiked" : "botonicono"}
          onClick={() => handleClick(props, "planets")}
        >
          <Card.Img className="icono" src={resistenciaImage} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlanetsCard;

<button className="botonicono">
  <img className="icono" src={resistenciaImage} />
</button>;
