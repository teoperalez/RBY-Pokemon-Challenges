import  React, { useState, useContext, createContext } from "react";

const PokedexContext = createContext();

export function usePokedex() {
    
    return useContext(PokedexContext)
}

export const PokedexProvider = ({ children }) => {
    const [pokedex, setPokedex] = useState()
    const [personalDex, setPersonalDex] = useState()
       

    return <PokedexContext.Provider value={{
        pokedex,
        personalDex, 
        setPokedex,
        setPersonalDex
    }}>
        {children}
    </PokedexContext.Provider>
}

