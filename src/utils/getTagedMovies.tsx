import axios from 'axios';
import {MovieType} from "./../context/MovieProvider"
export async function getTagedMovies(tag: string, content: string) {
  try {
    const response = await axios.get<MovieType[]>(`http://127.0.0.1:5000/get_movies/taged_movies?tag={'${tag}':'${content}'}`)

    const { data } = response;

    return data;
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
