import styles from '../styles/Card.module.css'
import { motion } from 'framer-motion'


export default function PokemonCard({pokemon}) {
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
          
          <img src={pokemon.image} width={200}/>
        </motion.div>
        <motion.h1 
          initial= {{ opacity:0}}
          whileHover={{
          opacity: 1
        }} className={styles.name}>{pokemon.name} / #{pokemon.id}</motion.h1>
                


      </div>  
  

  
  
  
  
  
    )
}