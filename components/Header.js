import banner from '../public/banner.png'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <Image alt="RBY Pokemon Challenges Banner"src={banner} layout="responsive" />
            <div className={styles.video}>
            <p>See all the action live on Youtube!</p>
            <iframe width="320" height="180" src="https://www.youtube.com/embed/nE2t0Prn-nk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
            </div>
        </header>
    )
}