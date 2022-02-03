import { pokedex } from "../../../pokedex";
import { challenge } from "../../../challengepokemon";

export default function handler(request, response) {
  const { method } = request;
  
  const challengelist = [];

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
    return response.status(200).json(challengelist);
  }

  if (method === "POST") {
    const { body } = request;
    challengelist.push({ ...body, id: challengelist.length + 1 });
    return response.status(200).json(challengelist);
  }
}