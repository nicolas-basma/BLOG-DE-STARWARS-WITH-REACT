import  React, { createContext, useContext, useState, useEffect} from "react";



const Context = createContext();


const People = () => {
    return (
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        )
    }
const Vehicle = () => {
    return (
        fetch("https://www.swapi.tech/api/vehicles/")
        .then(res => res.json())
    )
}

const Planet = () => {
    return (
        fetch("https://www.swapi.tech/api/planets/")
        .then(res => res.json())
    )
}
    
    export  const ContextProvider = ({children}) => {
        
        const [Characters, setCharacters] = useState(false)
        const [Vehicles, setVehicles] = useState(false)
        const [Planets, setPlanets] = useState(false)
        
        
        useEffect(() => {
            new Promise((resolve) => resolve(People()))
                .then(res => setCharacters(res.results))
                .catch(err => console.log(err));

            new Promise((resolve) => resolve(Vehicle()))
            .then(res => setVehicles(res.results))
            .catch(err => console.log(err));

            new Promise((resolve) => resolve(Planet()))
            .then(res => setPlanets(res.results))
            .catch(err => console.log(err))

            
    },[])
    
    return (
        <>
        <Context.Provider value={{Characters, Vehicles, Planets}}>
            {children}
        </Context.Provider>
        </>
    )
}

const useStore = () =>{
    return useContext(Context)
}

export default useStore;
