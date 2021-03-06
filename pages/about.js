import styles from '../styles/Home.module.css' 
import Meta from '../components/Meta'

export default function About() {
    return (
        <div className={styles.container}style={{margin: 12}}>
            <Meta title="About RBY Pokemon Challenges" description="Read About RBY Pokemon Challenges" tags="Pokemon, Minimum Battles, Generation 1, Pokemon Red, Pokemon Blue, Pokemon Yellow"/>

            <h1 className={styles.title}>About RBY Pokemon Challenges</h1>
            <br />
            <p>Hello and Welcome to RBY Pokemon Challenges!   <br /><br />My name is Teo, and I am striving to be the king of Minimum Battles in Generation 1 of Pokemon!  I started this challenge so that we could finally have a definitive list of every Pokemon that beats the game with the following rules:</p>
            <br />
            <ul className={styles.list}>
                <li className={styles.list}>Only one Pokemon used in battle (others are for HMs only)</li>
                <li className={styles.list}>No items in battle</li>
                <li className={styles.list}>Only fighting trainers required to beat the game (no level grinding)</li>
                <li className={styles.list}>No glitches (except the Badge Boost glitch, since it&apos;s unavoidable)</li>
            </ul>
            <br />
            <p>As of the launch of this website, we have already taken all 151 Generation 1 pokemon with MAX DVs through Brock and Misty and we are now continuing on to see which ones can beat Rival 5 at Silph Co. before taking the remaining challengers to the Elite 4.</p>
            <br />
            <br />
            <h1 className={styles.title}>About Me</h1>
            <br />
            <p>My name is Teo.   I am an English teacher from America living in rural Japan with my beautiful wife, Yuriko.   I play Pokemon on my days off and started making videos as a way to share my love of the game with others and contribute to the Pokemon community.  I hope that the content is fun for you guys as well as informative about what Pokemon make it through this challenge!</p>
            <br />
            <p>My other hobbies include making original music, including the outro song featured on my videos.  You can check out more of my music on <a href="https://open.spotify.com/artist/4v6idmJ8w0tktahSCJdepO?si=KcTZNUTuRuyyFe92QjLmXA">Spotify</a></p>
            <p>I am also an amateur web developer and freelance coder.  You can learn more about my coding services at <a href="http://www.Thinktradeprofit.com">ThinkTradeProfit.com</a></p> 
            <br />
            <p>For messages regarding my content, just drop a comment on the videos.  I read and respond to every comment and it&apos;s good for the algorithm.  For business inquiries, please contact me at teoinjp@gmail.com</p>


        </div>
    )
}