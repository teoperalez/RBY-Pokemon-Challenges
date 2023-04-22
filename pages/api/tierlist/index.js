import { tierlist } from "../../../tierlist";

export default function handler(request, response) {
  const { method } = request;
  
  if (method === "GET") {
    return response.status(200).json(tierlist);
  }

  if (method === "POST") {
    const { body } = request;
    tierlist.push({ ...body, id: tierlist.length + 1 });
    return response.status(200).json(tierlist);
  }
}