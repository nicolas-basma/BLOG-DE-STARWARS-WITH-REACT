import React from "react";
import { Button, Card } from "react-bootstrap";
import useStore from "../store/Contexto.jsx";


 const PlanetsCard = (props) => {

    const {listPlanets} = useStore();
    const {liked} = useStore();
    const {handleClick} = useStore();

    const [dataPlanets] = listPlanets ? listPlanets.filter((item) => item.result.uid == props.id) : null;

    return (

    <Card>
            <Card.Img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Population: {dataPlanets ? dataPlanets.result.properties.population : 'loading..'}</Card.Text>
            <Card.Text>Terrain: {dataPlanets ? dataPlanets.result.properties.terrain : 'loading..'}</Card.Text>
            <Button href={props.url}>Learn more!</Button>
            <i className={liked ? liked : "far fa-heart"} onClick={handleClick} id={props.id}></i>
        </Card.Body>
    </Card>
     );
}

export default PlanetsCard;