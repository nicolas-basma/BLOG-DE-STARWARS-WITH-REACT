import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";
import useStore from "../store/Contexto.jsx";

const VehicleCard = (props) => {
  const { listVehicles } = useStore();
  const {liked} = useStore();
  const {handleClick} = useStore();

  const [vehiclesData] = listVehicles
    ? listVehicles.filter((item) => item.result.uid == props.id)
    : null;
  return (
    <Card>
      <Card.Img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Model:{" "}
          {vehiclesData ? vehiclesData.result.properties.model : "loading.."}
        </Card.Text>
        <Card.Text>
          Vehicle class:{" "}
          {vehiclesData
            ? vehiclesData.result.properties.vehicle_class
            : "loading.."}
        </Card.Text>
        <Button
          href={vehiclesData ? vehiclesData.result.properties.url : "loading.."}
        >
          Learn more!
        </Button>
        <i className={liked ? liked : "far fa-heart"} onClick={handleClick} id={props.id}></i>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
