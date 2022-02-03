import { videos } from "../../../videolist";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const video = videos.find((vid) => vid.id === id);

    if (!video) {
      return response.status(400).json("video not found");
    }

    return response.status(200).json(video);
  }
}