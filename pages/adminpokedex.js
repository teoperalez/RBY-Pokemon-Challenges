import styles from '../styles/Home.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import Battle from '../components/Battle'
import Image from 'next/image'
import PokemonCard from '../components/PokemonCard'
import { useState, useEffect, useRef } from 'react'
import Meta from '../components/Meta'
import Overlay from '../components/Overlay'



export default function AdminPokedex( {challenge, pokedex}) {
  const [selectedId, setSelectedId] = useState(null)
  const [filteredList, setFilteredList] = useState(pokedex)
  const [pokedexType, setPokedexType] = useState(pokedex)
  const [searchQuery, setSearchQuery] = useState("")

  const [showOverlay, setShowOverlay] = useState(false)

  function handleRadio(e) {
    if (e.target.value === "pokedex") {
      setPokedexType(pokedex)
    } else if (e.target.value === "challenge") {
      setPokedexType(pokedex.filter(pokemon => pokemon.vsmisty === "Win"))
    }
    
  }

  function clearSearch(e) {
    setSearchQuery("")
  }

  useEffect(() => {
    setFilteredList(pokedexType)
  },[pokedexType])

  useEffect(() => {
    console.log(selectedId)
  },[selectedId])

  useEffect(() => {
    // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (searchQuery !== "") {
            // Assign the original list to currentList
      currentList = pokedexType;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      newList = currentList.filter(pokemon => {
                // change current item to lowercase
        const lc = pokemon.name.toLowerCase();
                // change search term to lowercase
        const filter = searchQuery.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = pokedexType;
    }
        // Set the filtered state based on what our rules added to newList
    setFilteredList(newList);
    
  },[searchQuery])

  function handleOverlay(e) {
    setShowOverlay(true)
  }
  
  function closeOverlay() {
    
    setShowOverlay(false)
    
  }
  
  return (
    <div className={styles.container}>
      <Meta title="Pokedex" description="Pokedex - 151 Generation 1 Pokemon" tags="Pokemon, Pokeddex, Minimum Battles, Generation 1, Pokemon Red, Pokemon Blue, Pokemon Yellow"/>
      <h1 className={styles.title}>Pokedex</h1>
      <input type="radio" id="pokedex" name="pokemon_list" value="pokedex" onChange={handleRadio} />
      <label className={styles.radiolabel} htmlFor="pokedex">   Full Pokedex  </label>
      <input type="radio" id="challenge" name="pokemon_list" value="challenge" onChange={handleRadio} />
      <label className={styles.radiolabel} htmlFor="challenge">  Challenge Pokemon  </label><br />
      <div className={styles.searchwrapper}>
    <img className={styles.searchicon} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
    <input className={styles.search} placeholder="Search by Name" value={searchQuery} type="text" onChange={(e) =>setSearchQuery(e.target.value)} />
    {searchQuery !== "" && (<img className={styles.clearicon} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" onClick={clearSearch}/>)}
  </div> 
      
      <div className={styles.wrapper}>
      
      
      <table className={styles.stattable}>
      
        <thead>
          <tr>
            <th className={styles.item}>ID</th>
            <th className={styles.item}>Sprite</th>
            <th className={styles.item}>Name</th>
            <th className={styles.item}>Type</th>
            <th className={styles.item}>Vs Brock <br /><span className={styles.small}>(Max DVs)</span></th>
            <th className={styles.item}>Vs Misty <br /><span className={styles.small}>(Max DVs)</span></th>
            <th className={styles.item}>Vs Rival <br /><span className={styles.small}>(Max DVs)</span></th>
            <th className={styles.item}>Vs Elite 4 <br /><span className={styles.small}>(Max DVs)</span></th>
            <th>View More</th>
          </tr>
        </thead>
        <tbody className={styles.tablelist}>
          {filteredList.length === 0 && (<tr><td className='span-4'>No Pokemon found</td></tr>)}
          {filteredList.map((pokemon, index) => (
            <tr key={pokemon.id} >
              
              <td>{pokemon.id}</td>
              <td><Image alt={pokemon.name} src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`} width={50} height={50} /></td>
              <td onClick={() => setSelectedId(pokemon.id)} className={styles.pokelink}><a>{pokemon.name}</a></td>
              <td><Image alt="type1" src={"/types/" + `${pokemon.type1}` +".png"} width={50} height={20} /><br />
              {pokemon.type2 !== "" && (<Image alt="type2" src={"/types/" + `${pokemon.type2}` +".png"} width={50} height={20} />)}</td>
              <td className={pokemon.vsbrock=== "Win" ? styles.win : pokemon.vsbrock=== "Loss" ? styles.loss : "" }>{pokemon.vsbrock}</td>
              <td className={pokemon.vsmisty=== "Win" ? styles.win : pokemon.vsmisty=== "Loss" ? styles.loss : "" }>{pokemon.vsmisty}</td>
              <td className={pokemon.vsrival=== "Win" ? styles.win : pokemon.vsrival=== "Loss" ? styles.loss : "" }>{pokemon.vsrival}</td>
              <td className={pokemon.vselite=== "Win" ? styles.win : pokemon.vselite=== "Loss" ? styles.loss : "" }>{pokemon.vselite}</td>
              <td><button onClick={handleOverlay}>Open Overlay</button></td>
            </tr>  
          ))}     
        </tbody>

      </table>
      
 
 
            
        </div>
       
        {showOverlay && (<Overlay handleClose={closeOverlay} pokemon={pokedex.filter(pokemon => pokemon.id === selectedId)}/>)}
      </div>
      
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("https://rby-pokemon-challenges.vercel.app/api/challenge");
  if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
  const challenge = await response.json();
  const response2 = await fetch("https://rby-pokemon-challenges.vercel.app/api/pokedex");
  if (!response2.ok) {
    throw new Error(`Error: ${response2.status}`);
  }
    const pokedex = await response2.json();  

return {
  props: {
    challenge,
    pokedex 
    
  }
};
}



 