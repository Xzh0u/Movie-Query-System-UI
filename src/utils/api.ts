import axios from "axios";
import { MovieType } from "context/MovieProvider";

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

export type CommentType = {
  author: string;
  ip: string;
  content: string;
  createdAt: number;
};

export async function getMovies(params: GetMoviesParams) {
  try {
    // FIXME: ip
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

export async function getComments(movieId: number) {
  try {
    const resp = await axios.get<CommentType[]>(
      `${serverUrl}/movies/comments/${movieId}`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function addClick(movieId: number) {
  try {
    const resp = await axios.post(`${serverUrl}/movies/click/${movieId}`);
    return resp.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function addComment({
  movieId,
  author,
  content,
}: {
  movieId: number;
  author: string;
  content: string;
}) {
  try {
    const resp = await axios.get<string>(
      `${serverUrl}/movies/comments/${movieId}/${author}/${content}`
    );
    return resp.data;
  } catch (e) {
    console.error(e);
    return false;
  }
}
