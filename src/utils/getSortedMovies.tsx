import axios from 'axios';
interface Movie {
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
export async function getSortedMovies(sortItem: string) {
  try {
    const response = await axios.get<Movie>(`http://127.0.0.1:5000/video/get_movies/sorted_movies?sort_item=${sortItem}`)

    const { data } = response.data;

    return { data };
  } catch (e) {
    alert(e);
    console.log(e);
    throw e;
  }
}
