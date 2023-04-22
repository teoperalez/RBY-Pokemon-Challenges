import styles from '../styles/Overlay.module.css'
import Image from 'next/image'

export default function Overlay({pokemon, handleClose}) {
    console.log(pokemon)
    
    return (
        <div className={styles.container}>
             
            
            
            
            <div >
            <img alt={pokemon[0].name}src={pokemon[0].image} width={200} />
            </div>
            <div className={styles.info} >
            
            </div>
            <div className={styles.data}>

            </div>
            <div className={styles.badges}>

            </div>
            <div className={styles.game}>

            </div>
            <button onClick={handleClose}>X</button>
        </div>
    )
}