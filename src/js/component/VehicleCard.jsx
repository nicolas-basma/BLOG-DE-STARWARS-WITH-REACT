import Button from "react-bootstrap/Button";
import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";
import { Card } from "react-bootstrap";

const VehicleCard = (props) => {
  const { listVehicles } = useStore();
  const {handleClick} = useStore();

  const [vehiclesData] = listVehicles
    ? listVehicles.filter((item) => item.result.uid == props.id)
    : null;
  return (
    <Card>
      <Card.Img
       variant="top" 
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
         variant="primary"
          href={vehiclesData ? vehiclesData.result.properties.url : "loading.."}
        >
          Learn more!
        </Button>
        <Button className="botonicono" onClick={()=> handleClick(props)}>
                <Card.Img className="icono" src={resistenciaImage}/>
            </Button>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
