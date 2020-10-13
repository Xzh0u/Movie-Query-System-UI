import axios from 'axios';
import {MovieType} from "./../context/MovieProvider"

export async function getSortedMovies(sortItem: string) {
  try {
    const response = await axios.get<MovieType[]>(`http://127.0.0.1:5000/get_movies/sorted_movies?sort_item=${sortItem}`)

    const { data } = response;

    return data;
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
