import axios from "axios";
import { MovieType } from "context/MovieProvider";

const serverUrl = "http://192.168.50.60:5000";

export type SortType = "view" | "date";

export type GetMoviesParams = {
  score?: number;
  scoreSmallerThan?: number;
  scoreLargerThan?: number;
  adaptation?: 1 | 0;
  country?: string;
  type?: string;
  director?: string;
  major?: string;
  language?: string;

  title?: string;
  sort?: SortType;

  limit?: number;
  offset?: number;
};

export async function getMovies(params: GetMoviesParams) {
  try {
    // FIXME: ip
    const resp = await axios.get<MovieType[]>(
      `${serverUrl}/movies`,
      {
        params,
      }
    );

    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}


export async function getTypeList(type: keyof GetMoviesParams) {
  try {
    const resp = await axios.get<string[]>(
      `${serverUrl}/movies/type/${type}`
    );

    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}