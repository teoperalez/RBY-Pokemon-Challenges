import styles from '../styles/Videos.module.css'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Meta from '../components/Meta';

export default function Videos({videos}) {
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carousel2Width, setCarousel2Width] = useState(0);
  const [carousel3Width, setCarousel3Width] = useState(0);
  const card = useRef();
  const carousel1 = useRef();
  const carousel2 = useRef();
  const carousel3 = useRef();

  const brockVideos = videos.filter(vid => vid.playlist.includes('brock'));
  const mistyVideos = videos.filter(vid => vid.playlist.includes('misty'));
  const rivalVideos = videos.filter(vid => vid.playlist.includes('rival'));


  useEffect(() => {
    setCarouselWidth(carousel1.current.scrollWidth- carousel1.current.offsetWidth)
    setCarousel2Width(carousel2.current.scrollWidth- carousel2.current.offsetWidth)
    setCarousel3Width(carousel3.current.scrollWidth- carousel3.current.offsetWidth)
    setWidth(card.current.scrollWidth)
    setHeight(card.current.scrollWidth*9/16)
  }, [])

  return (
        <div className={styles.container}>
            <Meta title="Challenge Videos" description="Pokemon Challenge Videos from RBY Pokemon Challenges" tags="Pokemon, Challenge, Youtube, Minimum Battles, Generation 1, Pokemon Red, Pokemon Blue, Pokemon Yellow"/>

            <h1>Brock Minimum Battles Runs</h1>
            <motion.div ref={carousel1} drag="x" dragConstraints={{right:0, left:-carouselWidth- 36}} className={styles.wrapper}>
            
              <motion.div className={styles.carousel}>
            {brockVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
            ))}
            </motion.div>
            </motion.div>
            
            <h1>Misty Minimum Battles Runs</h1>
            <motion.div ref={carousel2} drag="x" dragConstraints={{right:0, left:-carousel2Width- 36}} className={styles.wrapper}>
            <motion.div className={styles.carousel}>
              {mistyVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
              ))}
              </motion.div>
            </motion.div>
            <h1>Rival 5 (Silph Co.) Minimum Battles Runs</h1>
            <motion.div ref={carousel3} drag="x" dragConstraints={{right:0, left:-carousel3Width- 36}} className={styles.wrapper}>
            <motion.div className={styles.carousel}>
            {rivalVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
            ))}
            </motion.div>
            </motion.div>
            </div>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch("https://rby-pokemon-challenges.vercel.app//api/videos");
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    const videos = await response.json();
     
  
  return {
    props: {
      videos 
      
    }
  };
  }