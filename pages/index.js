import Head from 'next/head'
import PokeBallCard from '../components/PokeBallCard'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Battle from '../components/Battle'


export default function Home( {challenge, pokedex}) {
  const pokemonlistlen = challenge.length;
  const poke1 = Math.floor(Math.random() * pokemonlistlen)
  const poke2 = Math.floor(Math.random() * pokemonlistlen)
  const poke3 = Math.floor(Math.random() * pokemonlistlen)
    
  const pokemon1 = challenge[poke1]
  const pokemon2 = challenge[poke2]
  const pokemon3 = challenge[poke3]

  console.log(poke1)
  console.log(poke2)
  console.log(poke3)
  return (
    <div className={styles.container}>
      <Head>
        <title>RBY Pokemon Challenges</title>
        <meta name="" content="" />
      </Head>
      <h1 className={styles.title}>Hello and Welcome to RBY Pokemon Challenges!</h1>
      <p className={styles.description}>As the name implies this site nd the accompanying Youtube Channel are all about the first generation of Pokemon games - Red, Blue and Yellow! 
      <br /><br />Generation 1 was by far and away the most exciting generation of Pokemon - everything was new, and there were weekly guides in Nintendo Power magazine to walk new players through their first playthrough of the game.  That being said, the games also had a lot of challenging parts for first time players, and level grinding before Brock was almost always a necessity.   But was level grinding really necessary?   Was it possible to beat the game with fewer battles?  Did we really need items or TMs to beat the games?   

<br /><br />Let's dive into the world of Pokemon RBY, with only a change to our starters and see how far we can go!</p>
      <p className={styles.description}>This website was made to help the RBY Pokemon Challenges channel audience follow along with the challenges and provide some fun content for all of my amazing subscribers.  I enjoy making this content for all of you every week, and I can't wait to see where this channel goes!</p>
      <div className={styles.container}><h1 className={styles.title}>Choose a Pokemon to begin your journey!</h1><br />
      <motion.main className={styles.main}>
      
        <PokeBallCard pokemon={pokemon1} />
        <PokeBallCard pokemon={pokemon2}/>
        <PokeBallCard pokemon={pokemon3}/>
      </motion.main>
      
      </div>


      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/challenge");
  if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  const challenge = await response.json();
  const response2 = await fetch("http://localhost:3000/api/pokedex");
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