export default function Videos({videos}) {
    return (
        <div>
            {   videos.map((video, index) => (
                <iframe key={video.url} width="320" height="180" src={"https://www.youtube.com/embed/"+`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            ))}
            </div>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:3000/api/videos");
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