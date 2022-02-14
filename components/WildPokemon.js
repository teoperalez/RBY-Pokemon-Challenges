import { useState, useEffect } from 'react'
import { usePokedex } from '../contexts/PokedexContext'
import styles from '../styles/Card.module.css'
import { motion } from 'framer-motion'


export default function WildPokemon() {
  const { pokedex, setPokedex, personalDex, setPersonalDex } = usePokedex()
  const [wildPokemon, setWildPokemon] = useState(null)      
      
    useEffect(() => {
      if (pokedex !== null) { 
        const pokemonlistlen = pokedex.length;
        const poke1 = Math.floor(Math.random() * pokemonlistlen)
        setWildPokemon(pokedex[poke1])
        console.log(wildPokemon)
        }
    },[wildPokemon, pokedex])
  
  
  
  if (wildPokemon !== null) {
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
          
          <img alt={wildPokemon.name} src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${wildPokemon.name.toLowerCase()}.gif`} width={100} height={100} />
        </motion.div>
        <motion.h1 
           className={styles.name}>{wildPokemon.name} / #{wildPokemon.id}</motion.h1>
                


      </div>  
   
  
    )
    }
    return <div></div>
}