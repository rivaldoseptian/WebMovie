import { MOVIE_FETCH_SUCCES } from "../action/actionType";

const initialState = {
  movies: [],
};
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_FETCH_SUCCES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
