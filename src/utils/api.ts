import axios from "axios";
import { MovieType } from "context/MovieProvider";
// import { MovieType } from "context/MovieProvider";

export const serverUrl = "http://127.0.0.1:5000";

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

  limit: number;
  offset: number;
};

export async function getMovies(params: GetMoviesParams) {
  try {
    const resp = await axios.get<{ movies: MovieType[]; count: number }>(
      `${serverUrl}/movies`,
      {
        params,
      }
    );

    return resp.data;
  } catch (e) {
    console.error(e);
    return { movies: [], count: 0 };
  }
}

export async function getTypeList(type: keyof GetMoviesParams) {
  try {
    const resp = await axios.get<string[]>(`${serverUrl}/movies/type/${type}`);

    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const mockComments = [
  {
    author: "小🐷",
    ip: "235.234.123.25",
    content:
      "了解清楚小洲真美到底是一种怎么样的存在，是解决一切问题的关键。 一般来说， 小洲真美因何而发生？ 在这种困难的抉择下，本人思来想去，寝食难安。 小洲真美，到底应该如何实现。",
  },
  {
    author: "小🐷",
    ip: "235.234.123.25",
    content:
      "了解清楚小洲真美到底是一种怎么样的存在，是解决一切问题的关键。 一般来说， 小洲真美因何而发生？ 在这种困难的抉择下，本人思来想去，寝食难安。 小洲真美，到底应该如何实现。",
  },
];

export async function getComment(movieId: number) {
  try {
    console.log(movieId);
    return mockComments;
  } catch (e) {
    console.error(e);
    return [];
  }
}
