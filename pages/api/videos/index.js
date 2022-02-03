import { videos } from "../../../videolist";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(videos);
  }

  if (method === "POST") {
    const { body } = request;
    videos.push({ ...body, id: videos.length + 1 });
    return response.status(200).json(videos);
  }
}