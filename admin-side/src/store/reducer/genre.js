import { GENRE_FETCH_SUCCES } from "../action/actionType";

const initialState = {
  genres: [],
};
function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRE_FETCH_SUCCES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
}

export default genreReducer;
