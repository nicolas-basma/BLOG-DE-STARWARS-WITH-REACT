import React, { useEffect, useState } from "react";
import useStore from "../store/Contexto.jsx";
import CharactersCard from "../component/CharactersCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";


export const Home = () => {

	const {Characters, Vehicles, Planets}  = useStore();


  return (
    <>
      <div className="characterContainer">
		{ Characters
		? Characters.map((character)=> <CharactersCard key={character.uid} name={character.name}  id={character.uid}/>)
		: null}
			</div>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <VehicleCard  key={vehicle.uid} name={vehicle.name} img={vehicle.uid}/>)
			:null }
			</div>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <PlanetsCard key={planet.uid} name={planet.name} img={planet.uid}/>)
			:null}
			</div>
    </>
  );
};
