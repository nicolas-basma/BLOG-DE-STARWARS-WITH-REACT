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
  const [singleCharacter, setSingleCharacter] = useState([]);

  useEffect(() => {
    getPeople()
      .then((res) => {
         setCharacters(res)
        fetch(`https://www.swapi.tech/api/people/1`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setSingleCharacter(data);
        })
        .catch((err) => console.log(err))
      });
      
    getVehicle()
      .then((res) => setVehicles(res))
      .catch((err) => console.log(err));

    getPlanet()
      .then((res) => setPlanets(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Context.Provider value={{ Characters, Vehicles, Planets, singleCharacter }}>
        {children}
      </Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
