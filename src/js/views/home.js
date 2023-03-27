import React from "react";
import useStore from "../store/Contexto.jsx";
import CharactersCard from "../component/CharactersCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";


export const Home = () => {

	const {listPeople, listVehicles, listPlanets}  = useStore();


  return (
    <div className="mainContainer">
		<h1>Characters</h1>
      <div className="characterContainer">
		{ listPeople
		? listPeople.map((character)=> <CharactersCard key={character.result.uid} name={character.result.properties.name}  id={character.result.uid} eyeColor={character.result.properties.eye_color} gender={character.result.properties.gender}/>)
		: null}
			</div>
		<h1>Vehicles</h1>
			<div className="vehiclesContainer">
				{ listVehicles
				? listVehicles.map((vehicle) => <VehicleCard  key={vehicle.result.uid} name={vehicle.result.properties.name} id={vehicle.result.uid} cargoCapacity={vehicle.result.properties.cargo_capacity} passengers={vehicle.result.properties.passengers}  vehicleClass={vehicle.result.properties.vehicle_class} model={vehicle.result.properties.model} />)
			:null }
			</div>
		<h1>Planets</h1>
			<div className="planetsContainer">
				{ listPlanets
				? listPlanets.map((planet) => <PlanetsCard key={planet.result.uid} name={planet.result.properties.name} id={planet.result.uid} terrain={planet.result.properties.terrain} population={planet.result.properties.population}/>)
			:null}
			</div>
	</div>
  );
};
