import Image from 'next/image'
import styles from '../styles/Battle.module.css'
import {motion} from 'framer-motion'

export default function Battle() {

   
   return (

     <motion.div
        className={styles.battle}
        initial={{ opacity:0, translateY: -1000 }}
        animate={{ opacity:1, translateY: 0 }}
        exit={{ opacity:0, translateY: 1000 }}
      >
        <div className={styles.enemy}>
        <Image alt="Enemy Pokemon"src="http://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif" width={200} height={200} /> 
        </div>
        <div className={styles.hero}>
        <Image alt="Hero Pokemon" src="http://img.pokemondb.net/sprites/black-white/anim/back-normal/arcanine.gif" width={270} height={200} /> 
        </div>
        <div className={styles.actions}>
            <div className={styles.fight}>Fight</div>
            <div className={styles.catch}>Use Pokeball</div>
            <div className={styles.pokdex}>Check Pokedex</div>
            <div className={styles.run}>Run!</div>
        </div>
      </motion.div>
    )
}