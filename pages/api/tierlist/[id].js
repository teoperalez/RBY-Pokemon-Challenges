import { challenge } from "../../../challengepokemon";
import { pokedex } from "../../../pokedex";

export default function handler(request, response) {
  const { method } = request;

  const tierlist = [];

  for (let i = 0; i < challenge.length; i++) {
    const challengepokemon = challenge[i];        
    const pokemon = pokedex.find((poke) => poke.id === challengepokemon.dexnum);
    
    if (!pokemon) {
      return response.status(400).json("Pokemon not found");
    }
    challengelist.push({ 
      id: challengepokemon.id,
      dexnum: pokemon.id,
      name: pokemon.name,
      type1: pokemon.type1,
      type2: pokemon.type2,
      descriptions: pokemon.description,
      image: pokemon.image
    });
    
  }
  

  if (method === "GET") {
    const { id } = request.query;
    const idnum = parseInt(id)


    
    const challpokemon = challengelist[idnum-1];
    
    //const pokemon = pokedex.find((poke) => poke.id === challpokemon.dexnum);
    

    if (!challpokemon) {
      return response.status(400).json("Pokemon not found");
    }

    return response.status(200).json(challpokemon);
  }
}