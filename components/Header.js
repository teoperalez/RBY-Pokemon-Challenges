import banner from '../public/banner.png'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link';

export default function Header() {
    
    
    return(
        <header className={styles.header}>
            <Image alt="RBY Pokemon Challenges Banner"src={banner} layout="responsive" />
            
        </header>
    )
}