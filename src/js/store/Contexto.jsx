import  React, { createContext, useContext  } from "react";



const Context = createContext();

export  const contextProvider = ({children}) => {
    return (
        <>
        <Context.Provider>
            {children}
        </Context.Provider>
        </>
    )
}

const useStore = () =>{
    return useContext(Context)
}

export default useStore;
