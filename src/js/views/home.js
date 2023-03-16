import React from "react";
import useStore from "../store/Contexto.jsx";
import Cards from "../component/Cards.jsx";




export const Home = () => {



	const {Vehicles, Planets, singleCharacter}  = useStore();

	console.log(`single caracter`, singleCharacter)

  return (
    <>
      <div className="characterContainer">
		{ singleCharacter
		? singleCharacter.map((character)=> <Cards key={character.result.uid} name={character.result.properties.name} eyes={character.result.properties.eye_color} img={character.result.uid}/>)
		: null}
			</div>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <Cards  key={vehicle.uid} name={vehicle.name}/>)
			:null }
			</div>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <Cards key={planet.uid} name={planet.name}/>)
			:null}
			</div>
      <div className="text-center mt-5">
        <h1>Hello Rigo!</h1>
        <p>
        </p>
        <a href="#" className="btn btn-success">
          If you see this green button, bootstrap is working
        </a>
      </div>
    </>
  );
};
