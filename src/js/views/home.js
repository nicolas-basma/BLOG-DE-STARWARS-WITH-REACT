import React from "react";
import useStore from "../store/Contexto.jsx";
import CharactersCard from "../component/CharactersCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";




export const Home = () => {



	const {Vehicles, Planets, singleCharacter}  = useStore();

	console.log(`single character`, singleCharacter)

  return (
    <>
      <div className="characterContainer">
		{ singleCharacter
		? singleCharacter.map((character)=> <CharactersCard key={character.result.uid} name={character.result.properties.name} gender={character.result.properties.gender} eyes={character.result.properties.eye_color} img={character.result.uid}/>)
		: null}
			</div>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <VehicleCard  key={vehicle.uid} name={vehicle.name}/>)
			:null }
			</div>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <PlanetsCard key={planet.uid} name={planet.name}/>)
			:null}
			</div>
    </>
  );
};
