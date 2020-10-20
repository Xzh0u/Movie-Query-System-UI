import axios from 'axios';
import {MovieType} from "./../context/MovieProvider"

export async function getSortedMovies() {
  try {
    const response = await axios.get<MovieType[]>(`http://127.0.0.1:5000/get_movies/images`)

    const data = response.data;

    return data;
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
