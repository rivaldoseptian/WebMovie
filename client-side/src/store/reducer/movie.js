import { MOVIE_DETAIL_SUCCESS, MOVIE_FETCH_SUCCES } from "../action/actionType";

const initialiState = {
  movies: [],
  movie: {},
};

function movieReducer(state = initialiState, action) {
  switch (action.type) {
    case MOVIE_FETCH_SUCCES:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
