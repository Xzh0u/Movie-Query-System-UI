import React, { createContext, useReducer, Dispatch, RefObject } from 'react';


const initialMovieContext = {
  // rootRef: (undefined as unknown) as RefObject<HTMLDivElement>,
  movie: {
      data: [{
        country: '',
        date: '',
        director: '',
        introduction: '',
        language:'',
        link: {},
        majors: [],
        rank: 0,
        score: 0,
        title: [],
        type: [],
        // adaptation: boolean,
    }]
  } as MovieType,
  action: 'all',
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
};

export const movieContext = createContext(initialMovieContext);

const reducer = (state: MovieContextType, action: ActionType) => {
  switch (action.type) {
    case 'setMovies':
      return {
        ...state,
        movie: {
          ...state.movie,
          movie: action.payload.movie,
        },
      };
    case 'setAction':
      return {
        ...state,
        action: action.payload.action,
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
  | { type: 'setMovies'; payload: { movie: MovieType } }
  | { type: 'setAction'; payload: { action: string } };

export interface MovieType {
  data: Array<{
    country: string;
    date: string;
    director:string;
    introduction: string;
    language:string;
    link: {
      [K: string]: string;
    };
    majors: Array<string>;
    rank: number;
    score: number;
    title: Array<string>;
    type: Array<string>;
    // adaptation: boolean;
  }>;
}


export type MovieContextType = typeof initialMovieContext;

export default MovieProvider;
