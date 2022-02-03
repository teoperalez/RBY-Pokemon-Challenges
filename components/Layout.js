import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'

export default function Layout ({children}) {
    return (
        <div className={styles.layoutgrid}>
            <Header className={styles.header} />
            <Nav className={styles.nav} />
            <main className={styles.main}>
                    
                
                {children}
            </main>
            
            
        </div>

    )
}