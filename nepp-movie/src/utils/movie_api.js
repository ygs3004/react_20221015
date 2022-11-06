import axios from "axios";

const token = process.env.REACT_APP_TMDB_TOKEN;

export const movie_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `bearer ${token}`,
  },
});

export async function getPopularMovieList() {
  let result = await movie_instance.get("movie/popular");
  return result;
}

export async function getMovieDetail(id) {
  try {
    return await movie_instance.get(`movie/${id}`, {
      params: {
        language: "ko-KR",
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getSearch(query) {
  try {
    return await movie_instance.get("/search/multi", {
      params: {
        query,
        language: "ko-KR",
      },
    });
  } catch (e) {
    console.log(e);
  }
}
