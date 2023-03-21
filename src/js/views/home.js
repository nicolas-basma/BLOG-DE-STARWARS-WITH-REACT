import React, { useEffect, useState } from "react";
import useStore from "../store/Contexto.jsx";
import CharactersCard from "../component/CharactersCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";


export const Home = () => {

	const {Characters, Vehicles, Planets}  = useStore();


  return (
    <div className="mainContainer">
		<h1>Characters</h1>
      <div className="characterContainer">
		{ Characters
		? Characters.map((character)=> <CharactersCard key={character.uid} name={character.name}  id={character.uid}/>)
		: null}
			</div>
		<h1>Vehicles</h1>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <VehicleCard  key={vehicle.uid} name={vehicle.name} id={vehicle.uid}/>)
			:null }
			</div>
		<h1>Planets</h1>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <PlanetsCard key={planet.uid} name={planet.name} id={planet.uid}/>)
			:null}
			</div>
	</div>
  );
};
