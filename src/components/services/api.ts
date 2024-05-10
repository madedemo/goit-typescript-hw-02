import axios, { AxiosResponse } from "axios";

interface Photo {
  id: string;
  urls?: {
    small: string;
  };
}

interface SearchPhotosResponse {
  results: Photo[];
}

axios.defaults.baseURL = `https://api.unsplash.com`;

export default async function searchPhotos(topic: string, page: number): Promise<Photo[]> {
  const headers = {
    Authorization: "Client-ID T5gZTfvI24qurmUkngB09saD1DZm5on_YgIMN1vi4rY",
  };

  const params = {
    query: topic,
    page,
    per_page: 20,
  };

  try {
    const response: AxiosResponse<SearchPhotosResponse> = await axios.get("/search/photos", { headers, params });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error searching photos:", error);
    return [];
  }
}
