import { useState, useEffect } from 'react'
import { usePokedex } from '../contexts/PokedexContext'
import styles from '../styles/Card.module.css'
import { motion } from 'framer-motion'


export default function PokemonCard() {
  const { pokedex, setPokedex, personalDex, setPersonalDex } = usePokedex()
  const [myPokemon, setMyPokemon] = useState(null)      
    

  
  
    useEffect(() => {
      if (pokedex !== null) { 
      const jsonValue = window.localStorage.getItem("pokedex")
        if (jsonValue !== null)
        setMyPokemon(pokedex[parseInt(jsonValue)-1])
        console.log(myPokemon)
        console.log(pokedex)
      }
    },[myPokemon, pokedex])
  
  
  
  if (myPokemon !== null) {
  return (
      <div className={styles.card}>
        
        
        <motion.div 
          className={styles.cardimage}
          whileHover={{
            scale: 1.2,
            translateY: -15,
            translateX:-15,
            transition: { duration: 1 },
          }}
        
        >
          
          <img src={myPokemon.image} width={200}/>
        </motion.div>
        <motion.h1 
           className={styles.name}>{myPokemon.name} / #{myPokemon.id}</motion.h1>
                


      </div>  
  

  
  
  
  
  
    )
    }
    return <div></div>
}