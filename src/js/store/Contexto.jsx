import react from "react";
import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const getPeople = async () => {
  return fetch("https://www.swapi.tech/api/people/")
    .then((res) => res.json())
    .then((res) => res.results)};
const getVehicle = async () => {
  return fetch("https://www.swapi.tech/api/vehicles/")
    .then((res) => res.json())
    .then((res) => res.results);
};

const getPlanet = async () => {
  return fetch("https://www.swapi.tech/api/planets/")
    .then((res) => res.json())
    .then((res) => res.results);
};

export const ContextProvider = ({ children }) => {
  
  
  const [Characters, setCharacters] = useState([]);
  const [Vehicles, setVehicles] = useState([]);
  const [Planets, setPlanets] = useState([]);
  const [urlCharacter, setUrlCharacter] = useState([]);
  const [singleCharacter, setSingleCharacter] = useState([]);

  let arrayCaracteristicas = [];

  useEffect(() => {
    getPeople()
      .then((res) => setCharacters(res))
      .catch((err) => console.log(err));
       
      
    getVehicle()
      .then((res) => setVehicles(res))
      .catch((err) => console.log(err));

    getPlanet()
      .then((res) => setPlanets(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const eachCharacter =  Characters.map((personaje) => personaje.url);
    setUrlCharacter(eachCharacter);
  },[Characters])

  useEffect(() => {
    urlCharacter.map( async (url) => {
      return fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => { arrayCaracteristicas = arrayCaracteristicas.concat(data)
          console.log(`array`, arrayCaracteristicas)
        })
        .then(() => setSingleCharacter(arrayCaracteristicas))
        .catch((err) => console.log(err))
      })

  },[urlCharacter])
  return (
    <>
      <Context.Provider value={{ Characters, Vehicles, Planets, singleCharacter}}>
        {children}
      </Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
