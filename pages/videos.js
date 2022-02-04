import styles from '../styles/Videos.module.css'
import { useState, useRef, useEffect } from 'react';


export default function Videos({videos}) {
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const card = useRef();

  const brockVideos = videos.filter(vid => vid.playlist.includes('brock'));
  const mistyVideos = videos.filter(vid => vid.playlist.includes('misty'));
  const rivalVideos = videos.filter(vid => vid.playlist.includes('rival'));


  useEffect(() => {
    setWidth(card.current.scrollWidth)
    setHeight(card.current.scrollHeight/1.7)
  }, [])

  return (
        <div className={styles.container}>
            <h1>Brock Minimum Battles Runs</h1>
            <div className={styles.wrapper}>
            {brockVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
            ))}
            </div>
            <h1>Misty Minimum Battles Runs</h1>
            <div className={styles.wrapper}>
            {mistyVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
            ))}
            </div>
            <h1>Rival 5 (Silph Co.) Minimum Battles Runs</h1>
            <div className={styles.wrapper}>
            {rivalVideos.map((video, index) => (
                <div ref={card} key={video.url} className={styles.card}>
                  <div>
                    <iframe width={width} height={height} id="video" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <h2 className={styles.title}>{video.title}</h2>
                </div>
            ))}
            </div>
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