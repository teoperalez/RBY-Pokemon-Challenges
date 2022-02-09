import { useState, useEffect } from 'react'

import styles from '../styles/Card.module.css'
import { motion } from 'framer-motion'


export default function PokemonCard() {
  const [myPokemon, setMyPokemon] = useState(null)
        
    useEffect(() => {
        const jsonValue = window.localStorage.getItem("pokedex")
        setMyPokemon(jsonValue)
        console.log(myPokemon)
    },[])
  
  
  
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
    return null
}