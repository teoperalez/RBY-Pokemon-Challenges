import navStyles from '../styles/Nav.module.css' 
import Link from 'next/link'

export default function Nav() {
    return (
        <div className={navStyles.nav}>
            <ul className={navStyles.navbar}>
                <li>
                    <Link href="/">Top</Link>
                </li>
                <li>
                    <Link href="/pokedex">Pokedex</Link>
                </li>
                <li>
                    <Link href="/videos">Challenge Videos</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}