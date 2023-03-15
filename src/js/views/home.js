import React from "react";
import useStore from "../store/Contexto.jsx";
import Card from "../component/Cards.jsx";




export const Home = () => {



	const {Characters, Vehicles, Planets}  = useStore();



  return (
    <>
      <div className="characterContainer">
		{ Characters 
		? Characters.map((character)=> <Card key={character.uid} name={character.name}/>)
		: null}
			</div>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <Card  key={vehicle.uid} name={vehicle.name}/>)
			:null }
			</div>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <Card key={planet.uid} name={planet.name}/>)
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
