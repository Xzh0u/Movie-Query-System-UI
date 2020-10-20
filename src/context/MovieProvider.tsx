/* eslint-disable no-debugger */
import React, { createContext, useReducer, Dispatch} from 'react';


const initialMovieContext = {
  // rootRef: (undefined as unknown) as RefObject<HTMLDivElement>,
  movie: [{
        country: '',
        date: '',
        director: '',
        introduction: '',
        language:'',
        link: {},
        majors: [],
        rank: 0,
        score: 0,
        title: '',
        type: [],
        adaptation: false,
        image_url:'',
        runtime:'',
    }] as MovieType[],
  imgs: [] as ImageType[],
  action: 'all',
  type: '',
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
};

export const movieContext = createContext(initialMovieContext);

const reducer = (state: MovieContextType, action: ActionType) => {
  switch (action.type) {
    case 'setMovies':{
      const tmp = {
        ...state,
        movie: action.payload.movie,
      };
      console.log(tmp)
      return tmp;
    }
    case 'setAction':
      return {
        ...state,
        action: action.payload.action,
      };
    case 'setActionType':
      return {
        ...state,
        type: action.payload.type,
      };
    case 'setImages':
      return {
        ...state,
        imgs: action.payload.imgs,
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
  | { type: 'test'; payload: { test: string } }
  | { type: 'setMovies'; payload: { movie: MovieType[] } }
  | { type: 'setAction'; payload: { action: string } }
  | { type: 'setActionType'; payload: { type: string } }
  | { type: 'setImages'; payload: { imgs: ImageType[] } };


export interface MovieType {
    country: string;
    date: string;
    director:string;
    introduction: string;
    image_url: string;
    runtime: string;
    language:string;
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
