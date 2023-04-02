import { BaseUrl } from "../../components/baseUrl";
import { MOVIE_DETAIL_SUCCESS, MOVIE_FETCH_SUCCES } from "./actionType";

export const fetchMovie = (payload) => {
  return {
    type: MOVIE_FETCH_SUCCES,
    payload,
  };
};

export const MovieDetail = (payload) => {
  return {
    type: MOVIE_DETAIL_SUCCESS,
    payload,
  };
};

export const showMovie = () => {
  return (dispatch) => {
    fetch(BaseUrl + "/movies/pub/fetchmovie")
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        const action = fetchMovie(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const detailMovie = (id) => {
  console.log(id);
  return (dispatch) => {
    fetch(BaseUrl + "/movies/pub/detail/" + id)
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const action = MovieDetail(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
