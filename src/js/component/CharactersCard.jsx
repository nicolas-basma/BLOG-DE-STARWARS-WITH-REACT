import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

const CharactersCard = (props) => {


  const {listPeople} = useStore();
  const {liked} = useStore();
  const {handleClick} = useStore();

  const [charData] = listPeople ? listPeople.filter((item) =>  item.result.uid == props.id) : null;
  
  return (
      <Card>
        <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Gender: {charData ? charData.result.properties.gender : 'loading..'}</Card.Text>
          <Card.Text>Color: {charData ? charData.result.properties.eye_color : 'loading..'}</Card.Text>
          <Button variant="primary" href={charData ? charData.result.properties.url : 'loading..'}>Learn more!</Button>
          <Button className="botonicono">
                <Card.Img className="icono" src={resistenciaImage}/>
            </Button>
        </Card.Body>
      </Card>
  );
};

export default CharactersCard;
