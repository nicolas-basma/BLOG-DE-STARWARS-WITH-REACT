import React from "react";
import useStore from "../store/Contexto.jsx";
import Card from "../component/Cards.jsx";




export const Home = () => {



	const {Characters, Vehicles, Planets}  = useStore();



  return (
    <>
      <div className="characterContainer">
		{ Characters 
		? Characters.map((character)=> <div key={character.uid}><Card name={character.name}/></div>)
		: null}
			</div>
			<div className="vehiclesContainer">
				{ Vehicles
				? Vehicles.map((vehicle) => <div key={vehicle.uid}><Card name={vehicle.name}/></div>)
			:null }
			</div>
			<div className="planetsContainer">
				{ Planets
				? Planets.map((planet) => <div key={planet.uid}><Card name={planet.name}/></div>)
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
