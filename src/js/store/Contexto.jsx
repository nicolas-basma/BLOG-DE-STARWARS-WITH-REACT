import React, { createContext, useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { multipleFetch, getElement } from "./Store";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [listPeople, setListPeople] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);
  const [listVehicles, setListVehicles] = useState([]);
  const [favorite, setFavorite] = useState([]);
  

  useEffect(() => {
    const localStoreCharacters = localStorage.getItem("characters");
    const localStoreVehicles = localStorage.getItem("vehicles");
    const localStorePlanets = localStorage.getItem("planets");


    if (localStoreCharacters) {
      setListPeople(JSON.parse(localStoreCharacters));
    } else {
      getElement("https://www.swapi.tech/api/people")
        .then((res) => {
          return multipleFetch(res);
        })
        .then((data) => {
          localStorage.setItem("characters", JSON.stringify(data))
          setListPeople(data);
        })
        .catch((err) => console.log(err));
    }

    if(localStoreVehicles){
      setListVehicles(JSON.parse(localStoreVehicles))
    }else{
    getElement("https://www.swapi.tech/api/vehicles/")
      .then((res) => {
        return multipleFetch(res);
      })
      .then((data) => {
        localStorage.setItem('vehicles', JSON.stringify(data))
        setListVehicles(data);
      })
      .catch((err) => console.log(err));
    }

    if(localStorePlanets){
      setListPlanets(JSON.parse(localStorePlanets))
    } else{

    getElement("https://www.swapi.tech/api/planets/")
      .then((res) => {
        return multipleFetch(res);
      })
      .then((data) =>{
        localStorage.setItem('planets', JSON.stringify(data))
      setListPlanets(data)
    })
      .catch((err) => console.log(err));
    }
  }, []);

  const handleDelete = (value) => {
    let filterFavorite = favorite.filter((item) => item.id != value);
    setFavorite(filterFavorite);
  };

  const handleClick = (value, type) => {
    const favoriteObject = {
      id: type + '/' + value.id,
      name: value.name,
    };
    let favoriteExist = favorite.find((item) => item.id === favoriteObject.id);

    if (favoriteExist) {
      handleDelete(favoriteObject.id);
      return;
    }
    let selection = favorite.concat([favoriteObject]);
    setFavorite(selection);
  };

  return (
    <>
      <Context.Provider
        value={{
          listPeople,
          listPlanets,
          listVehicles,
          handleClick,
          handleDelete,
          favorite,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

const useStore = () => {
  return useContext(Context);
};

export default useStore;
