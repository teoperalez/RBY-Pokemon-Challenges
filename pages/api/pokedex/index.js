import { pokedex } from "../../../pokedex";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(pokedex);
  }

  if (method === "POST") {
    const { body } = request;
    pokedex.push({ ...body, id: pokedex.length + 1 });
    return response.status(200).json(pokedex);
  }
}