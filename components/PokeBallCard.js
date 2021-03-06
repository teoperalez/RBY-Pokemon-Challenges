import React, { useState, useEffect } from "react"
import pokeball from "../public/pokeball.png"
import openPokeball from "../public/openpokeball.png"
import { useRouter } from 'next/router';
import { usePokedex } from "../contexts/PokedexContext";
import {motion, AnimatePresence} from 'framer-motion' 
import pokeballStyles from '../styles/PokeBallCard.module.css'
import Image from 'next/image'


export default function PokeBallCard({pokemon}) {
    const [clicked, setClicked] = useState(false)
    const [myPokemon, setMyPokemon] = useState(null)      
    
    useEffect(() => {
        if (myPokemon !== null) {
            window.localStorage.setItem("pokedex", myPokemon)
            console.log("New Pokemon set in local storage!")        }
    },[myPokemon])

    return (
        <div>
            {!clicked && (					
                <div className={pokeballStyles.closedball}>
                    <a className={pokeballStyles.ball} onClick={() => setClicked(!clicked)}>
                        <Image priority alt="pokeball" src={pokeball} width={400} height={200}/>
                    </a>
                </div>
            )}
            {clicked && (					
                <div className={pokeballStyles.openball}>
                    <a className={pokeballStyles.ball} onClick={() => setClicked(!clicked)}>
                        <Image alt="open pokeball"src={openPokeball} width={400} height={200}/>
                    </a>
                </div>
            )}
            
            <div 
                className={pokeballStyles.card}
                
            >
                {!clicked && (<AnimatePresence><motion.h2 initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>I wonder what&apos;s inside the Pokeball?</motion.h2></AnimatePresence>)}
                
        
                <AnimatePresence exitBeforeEnter>
                {clicked && (<motion.div 
                        initial={{ scale: 0, opacity: 0, translateX: -50, translateY:-300}}
                        animate={{ scale:1, opacity: 1, translateX: 0, translateY: 0}}
                        exit={{scale: 0, opacity: 0, translateX: -50, translateY: -260}}
                        transition={{ type: "spring", duration: 0.8 }}
                        className={pokeballStyles.pokemon}
                
                    >
                        <img alt={pokemon.name}src={pokemon.image} width={200} />
                     
                    </motion.div>)}
                    
                </AnimatePresence>
                {clicked && (<h1 className={pokeballStyles.pokemonname}>{pokemon.name}</h1>)}
                {clicked && (<h2 className={pokeballStyles.pokemonname}>Pokedex ID #{pokemon.id}</h2>)}
                {clicked && (<div className={pokeballStyles.types} >
                            <Image alt="type1" src={"/types/" + `${pokemon.type1}` +".png"} width={100} height={40} />
                            {pokemon.type2 !== "" && (<Image alt="type2" src={"/types/" + `${pokemon.type2}` +".png"} width={100} height={40} />)}
                            
                    </div>)}
                
                    {clicked && (<button onClick={() => setMyPokemon(pokemon.id)}>Set Pokemon</button>)}   
                
                
                
                
                
            </div>
            
        </div>
    )
}