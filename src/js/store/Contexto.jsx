import  React, { createContext, useContext, useState, useEffect} from "react";



const Context = createContext();

const People = () => {
    return (
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        )
    }  
    
    export  const ContextProvider = ({children}) => {
        
        const [Characters, setCharacters] = useState(false);
        
        
        useEffect(() => {
            new Promise((resolve) => resolve(People()))
                .then((res) => setCharacters(res.results))
                .catch(err => console.error(err))
    },[])
    
    return (
        <>
        <Context.Provider value={Characters}>
            {children}
        </Context.Provider>
        </>
    )
}

const useStore = () =>{
    return useContext(Context)
}

export default useStore;
