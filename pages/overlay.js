import styles from '../styles/Overlay.module.css'

export default function Overlay({pokemon}) {
    console.log({pokemon})
    
    return (
        <div className={styles.container}>
            <div className={styles.pokemon} >
                
            </div>
            <div className={styles.info} >
            
            </div>
            <div className={styles.data}>

            </div>
            <div className={styles.badges}>

            </div>
            <div className={styles.game}>

            </div>

        </div>
    )
}