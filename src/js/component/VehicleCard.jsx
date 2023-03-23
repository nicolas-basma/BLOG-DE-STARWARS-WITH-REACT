import Button from "react-bootstrap/Button";
import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const VehicleCard = (props) => {
  const { listVehicles } = useStore();
  const {handleClick} = useStore();

  const navigate = useNavigate();


  const handleNavigateVehicle = () => {
    navigate(`/vehicles/${props.id}`);
  }

  return (
    <Card>
      <Card.Img
       variant="top" 
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Model:{props.model}
        </Card.Text>
        <Card.Text>
          Vehicle class:{props.vehicleClass}
        </Card.Text>
        <Button variant="primary" onClick={handleNavigateVehicle} >Learn more!</Button>
        <Button className="botonicono" onClick={()=> handleClick(props, 'vehicles')}>
                <Card.Img className="icono" src={resistenciaImage}/>
            </Button>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
