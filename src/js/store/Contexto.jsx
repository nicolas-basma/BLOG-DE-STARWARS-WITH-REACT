import React, { createContext, useContext, useState, useEffect } from "react";
import { multipleFetch, getElement } from "./Store";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  
  const [Characters, setCharacters] = useState([]);
  const [Vehicles, setVehicles] = useState([]);
  const [Planets, setPlanets] = useState([]);
  const [listPeople, setListPeople] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);
  const [listVehicles, setListVehicles] = useState([]);
  const [favorite, setFavorite] = useState([]);
  
  useEffect(() => {
    getElement("https://www.swapi.tech/api/people")
      .then((res) => {
        setCharacters(res)
        return multipleFetch(res)
      })
      .then((data) => setListPeople(data))
      .catch((err) => console.log(err));
       
    getElement("https://www.swapi.tech/api/vehicles/")
      .then((res) => {
        setVehicles(res)
        return multipleFetch(res)
      })
      .then((data) => setListVehicles(data))
      .catch((err) => console.log(err));

    getElement("https://www.swapi.tech/api/planets/")
      .then((res) => {
        setPlanets(res)
        return multipleFetch(res)
      })
      .then((data) => setListPlanets(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (value) => {
    
    let selection = favorite.concat([value]);
    setFavorite(selection);
  }



  return (
    <>
      <Context.Provider value={{ Characters, Vehicles, Planets, listPeople, listPlanets, listVehicles, handleClick, favorite}}>
        {children}
      </Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;



