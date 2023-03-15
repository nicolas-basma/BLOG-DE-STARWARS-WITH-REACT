import React from "react";
import useStore from "../store/Contexto.jsx";
import Cards from "../component/Cards.jsx";




export const Home = () => {



	const {Characters, Vehicles, Planets, singleCharacter}  = useStore();



  return (
    <>
      <div className="characterContainer">
		{ Characters 
		? Characters.map((character)=> <Cards key={character.uid} name={character.name} description={singleCharacter.description}/>)
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
