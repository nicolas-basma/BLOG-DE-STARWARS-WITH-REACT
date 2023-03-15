import React from "react";
import useStore from "../store/Contexto.jsx";
import Card from "../component/Cards.jsx";




export const Home = () => {



	const Characters  = useStore();

	console.log(Characters)

  return (
    <>
      <div className="characterContainer">{ Characters ? Characters.map((character)=>{
			return (
				<div key={character.uid}><Card name={character.name}/></div>
			)
			}) : null}</div>
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
