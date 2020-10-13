import axios from 'axios';
import {MovieType} from "./../context/MovieProvider"
 
export async function getAllMovies() {
  try {
    const response = await axios.get<MovieType[]>(`http://127.0.0.1:5000/get_movies/all_movies`)

    const data = response.data;

    return data;
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
