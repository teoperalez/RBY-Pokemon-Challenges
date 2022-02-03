import styles from '../styles/Home.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import Battle from '../components/Battle'
import Image from 'next/image'
import PokemonCard from '../components/PokemonCard'
import { useState } from 'react'



export default function Home( {challenge, pokedex}) {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className={styles.container}>
      
         
      <table className='sortable'>
        
        <thead>
          <tr><h1>Pokedex</h1></tr>
          <tr>
            <th>ID</th>
            <th>Sprite</th>
            <th>Name</th>
            <th>Type1</th>
            <th>Type2</th>
          </tr>
        </thead>
        <tbody>
          {pokedex.map((pokemon, index) => (
            <tr key={pokemon.id} >
              
              <td>{pokemon.id}</td>
              <td><Image alt={pokemon.name} src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`} width={50} height={50} /></td>
              <td>{pokemon.name}</td>
              <td>{pokemon.type1}</td>
              <td>{pokemon.type2}</td>

            </tr>  
          ))}     
        </tbody>

      </table>
      
      
        <h1>Challenge</h1>
        
 
 {challenge.map((pokemon, index) => (
   <motion.div key={pokemon.id} layoutId={pokemon.id} onClick={() => setSelectedId(pokemon.id)}>
     <PokemonCard pokemon={pokemon}/>
   </motion.div>
 ))}
 
 <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
       <PokemonCard pokemon={challenge[selectedId]}/>
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence>
            
        
      </div>
      
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("https://rby-pokemon-challenges.vercel.app//api/challenge");
  if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  const challenge = await response.json();
  const response2 = await fetch("https://rby-pokemon-challenges.vercel.app//api/pokedex");
  if (!response2.ok) {
    throw new Error(`Error: ${response2.status}`);
  }
    const pokedex = await response2.json();  

return {
  props: {
    challenge,
    pokedex 
    
  }
};
}