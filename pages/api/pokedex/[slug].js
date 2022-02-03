import { pokedex } from "../../../pokedex";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { slug } = request.query;

    const pokemon = pokedex.find((poke) => poke.name.toString() === slug);

    if (!pokemon) {
      return response.status(400).json("Pokemon not found");
    }

    return response.status(200).json(pokemon);
  }
}