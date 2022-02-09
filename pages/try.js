import { useEffect, useState } from "react";
import { usePokedex } from "../contexts/PokedexContext";
import PokeBallCard from '../components/PokeBallCard'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Battle from '../components/Battle'
import Meta from '../components/Meta'
import PokemonCard from '../components/PokemonCard'

export default function Try({pdex, challenge}) {
    const { pokedex, setPokedex, personalDex, setPersonalDex } = usePokedex()
    
    useEffect(() => {
        setPokedex(pdex);
        
        const myDex = window.localStorage.getItem("pokedex")
        setPersonalDex(myDex);
    })
    console.log(pokedex)
    console.log(personalDex)

    const [dex, setDex] = useState(pdex)
  const [pokemon1, setPokemon1] = useState(dex[Math.floor(Math.random() * dex.length)]) 
  const [pokemon2, setPokemon2] = useState(dex[Math.floor(Math.random() * dex.length)])
  const [pokemon3, setPokemon3] = useState(dex[Math.floor(Math.random() * dex.length)])
  

  useEffect(() => {
  const pokemonlistlen = dex.length;
    const poke1 = Math.floor(Math.random() * pokemonlistlen)  
  const poke2 = Math.floor(Math.random() * pokemonlistlen)
    const poke3 = Math.floor(Math.random() * pokemonlistlen)
    setPokemon1(dex[poke1])
    setPokemon2(dex[poke2])
    setPokemon3(dex[poke3])
    
  }, [dex]);

  function handleRadio(e) {
    
    if (e.target.value === "pokedex") {
      setDex(pokedex)
    }

    if (e.target.value === "challenge") {
      setDex(pokedex.filter(pokemon => pokemon.vsrival ==="Upcoming"))
    }
    
    }

 

  
  return (
    <div className={styles.container}>
      <Meta title="Top" description="Pokemon Minimum Battles Challenges Top" tags="Pokemon, Minimum Battles, Generation 1, Pokemon Red, Pokemon Blue, Pokemon Yellow"/>
      <h1 className={styles.title}>Hello and Welcome to RBY Pokemon Challenges!</h1>
      <h1 className={styles.title}>The site is still under construction, so please check back for updates</h1>
      <p className={styles.description}>As the name implies this site and the accompanying Youtube Channel are all about the first generation of Pokemon games - Red, Blue and Yellow! 
      <br /><br />Generation 1 was by far and away the most exciting generation of Pokemon - everything was new, and there were weekly guides in Nintendo Power magazine to walk new players through their first playthrough of the game.  That being said, the games also had a lot of challenging parts for first time players, and level grinding before Brock was almost always a necessity.   But was level grinding really necessary?   Was it possible to beat the game with fewer battles?  Did we really need items or TMs to beat the games?   

<br /><br />Let&apos;s dive into the world of Pokemon RBY, with only a change to our starters and see how far we can go!</p>
      <p className={styles.description}>This website was made to help the RBY Pokemon Challenges channel audience follow along with the challenges and provide some fun content for all of my amazing subscribers.  I enjoy making this content for all of you every week, and I can&apos;t wait to see where this channel goes!</p>
      <div className={styles.description}>
        <PokemonCard />
        <input type="radio" id="pokedex" name="pokemon_list" defaultChecked="pokedex" value="pokedex" onChange={handleRadio} />
        <label  htmlFor="pokedex">   Full Pokedex  </label>
        <input type="radio" id="challenge" name="pokemon_list" value="challenge" onChange={handleRadio} />
        <label htmlFor="challenge">  Challenge Pokemon  </label><br />
      </div>
      <div className={styles.container}><h1 className={styles.title}>Choose a Pokemon to begin your journey!</h1><br />
      <motion.main className={styles.main}>
      
        <PokeBallCard pokemon={pokemon1} />
        <PokeBallCard pokemon={pokemon2} />
        <PokeBallCard pokemon={pokemon3} />
      </motion.main>
      
      </div>


      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
    const response = await fetch("https://rby-pokemon-challenges.vercel.app/api/challenge");
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    const challenge = await response.json();
    const response2 = await fetch("https://rby-pokemon-challenges.vercel.app/api/pokedex");
    if (!response2.ok) {
      throw new Error(`Error: ${response2.status}`);
    }
      const pdex = await response2.json();  
  
  return {
    props: {
      challenge,
      pdex 
      
    }
  };
  }