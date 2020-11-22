/* eslint-disable no-debugger */
import React, { createContext, useReducer, Dispatch } from "react";
import { GetMoviesParams } from "utils/api";

const initialMovieContext = {
  // rootRef: (undefined as unknown) as RefObject<HTMLDivElement>,
  movies: [] as MovieType[],
  movieCount: 0,
  imgs: [] as ImageType[],
  action: "all",
  type: "",
  getMoviesParams: { sort: "date", limit: 10, offset: 0 } as GetMoviesParams,
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
};

export const movieContext = createContext(initialMovieContext);

const reducer = (state: MovieContextType, action: ActionType) => {
  switch (action.type) {
    case "setMovies": {
      const tmp = {
        ...state,
        movies: action.payload.movies,
      };
      console.log(tmp);
      return tmp;
    }
    case "setMovieCount":
      return {
        ...state,
        movieCount: action.payload.count,
      };
    case "setAction":
      return {
        ...state,
        action: action.payload.action,
      };
    case "setActionType":
      return {
        ...state,
        type: action.payload.type,
      };
    case "setImages":
      return {
        ...state,
        imgs: action.payload.imgs,
      };
    case "mergeGetMoviesParams":
      return {
        ...state,
        getMoviesParams: { ...state.getMoviesParams, ...action.payload.params },
      };
    default:
      return state;
  }
};

const MovieProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialMovieContext);
  return (
    <movieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </movieContext.Provider>
  );
};

type ActionType =
  | { type: "test"; payload: { test: string } }
  | { type: "setMovies"; payload: { movies: MovieType[] } }
  | { type: "setMovieCount"; payload: { count: number } }
  | { type: "setAction"; payload: { action: string } }
  | { type: "setActionType"; payload: { type: string } }
  | { type: "setImages"; payload: { imgs: ImageType[] } }
  | {
      type: "mergeGetMoviesParams";
      payload: { params: Partial<GetMoviesParams> };
    };

export interface MovieType {
  country: string;
  date: string;
  director: string;
  introduction: string;
  image_url: string;
  runtime: string;
  language: string;
  link: {
    [K: string]: string;
  };
  majors: Array<string>;
  rank: number;
  score: number;
  title: string;
  type: Array<string>;
  adaptation: boolean;
}

export interface ImageType {
  url: string;
  pic_names: string;
}

export type MovieContextType = typeof initialMovieContext;

export default MovieProvider;
