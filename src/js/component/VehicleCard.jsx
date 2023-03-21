import React from "react";
import useStore from "../store/Contexto.jsx";
import resistenciaImage from "../../img/resistencia.jpg";


const VehicleCard = (props) => {
  const { listVehicles } = useStore();

  const [vehiclesData] = listVehicles
    ? listVehicles.filter((item) => item.result.uid == props.id)
    : null;
  console.log(vehiclesData);
  return (
    <div id="carousel" className="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="card cardSize">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Model:{" "}
                {vehiclesData
                  ? vehiclesData.result.properties.model
                  : "loading.."}
              </p>
              <p className="card-text">
                Vehicle class:{" "}
                {vehiclesData
                  ? vehiclesData.result.properties.vehicle_class
                  : "loading.."}
              </p>
              <a
                href={
                  vehiclesData
                    ? vehiclesData.result.properties.url
                    : "loading.."
                }
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

export default VehicleCard;
