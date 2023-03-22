import React from "react";
import { useParams } from "react-router";
import useStore from "../store/Contexto.jsx";

const ProfileVehicle = () => {
    const params = useParams();
    console.log(params)
  
    const {listVehicle} = useStore();
  
    const [data] = listVehicle.length ? listVehicle.filter((item) => item.result.uid == params.id) : [];
    console.log(`data`,data)
    return (
  
        <div className="card mb-3 profileCard">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data ? data?.result.properties.name : 'loading..'}</h5>
                <p className="card-text">
                 Before "Star Wars," most fictional spaceships looked a lot like real spaceships. 
                 George Lucas broke the mold of science fiction by moving away from typical ship designs, and gave us unique and extraordinary vehicles.
                 Even while on the planet's surfaces, "Star Wars" never went with the dull rover designs, but gave us transports that flew, crawled,
                 hummed and sailed into our collective imagination.
                 With that in mind, and as we look forward to "Rogue One: A Star Wars Story" in December, 
                 CBR runs down 20 of the best vehicles in the "Star Wars" universe.
                </p>
                <p className="individualDetails">
                  Name:{" "}
                  {data ? data?.result.properties.name : "loading.."}
                </p>
                <p className="individualDetails">
                  Cargo capacty:{" "}
                  {data ? data?.result.properties.cargo_capacity : "loading.."}
                </p>
                <p className="individualDetails">
                    Consumables:{" "}
                  {data ? data?.result.properties.consumables : "loading.."}
                </p>
                <p className="individualDetails">
                    Cost in credits:{" "}
                  {data ? data?.result.properties.cost_in_credits : "loading.."}
                </p>
                <p className="individualDetails">
                     Passengers:{" "}
                  {data ? data?.result.properties.passengers : "loading.."}
                </p>
                <p className="individualDetails">
                    Pilots:{" "}
                  {data ? data?.result.properties.pilots : "loading.."}
                </p>
                <p className="individualDetails">
                    Manufacturer:{" "}
                  {data ? data?.result.properties.manufacturer : "loading.."}
                </p>
                <p className="individualDetails">
                     Vehicle_class:{" "}
                  {data ? data?.result.properties.vehicle_class : "loading.."}
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};
export default ProfileVehicle;