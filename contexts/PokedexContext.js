import  React, { useState, useContext, createContext, useLayoutEffect } from "react";

const PokedexContext = createContext();

export function usePokedex() {
    
    return useContext(PokedexContext)
}

export const PokedexProvider = ({ children }) => {
    const [pokedex, setPokedex] = useState(null)
    const [personalDex, setPersonalDex] = useState(null)
       
    useLayoutEffect(() => {
        if (pokedex === null)
            console.log("Pokedex not loaded")
        
        if (pokedex !== null) { 
            const jsonValue = window.localStorage.getItem("pokedex")
              if (jsonValue !== null)
              setPersonalDex(parseInt(jsonValue))
              console.log(personalDex)
              console.log(pokedex)
            }
    }, [pokedex, personalDex])

    return <PokedexContext.Provider value={{
        pokedex,
        personalDex, 
        setPokedex,
        setPersonalDex
    }}>
        {children}
    </PokedexContext.Provider>
}

