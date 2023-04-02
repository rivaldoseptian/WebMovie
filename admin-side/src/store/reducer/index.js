import { combineReducers } from "redux";
import movieReducer from "./movie";
import genreReducer from "./genre";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

export default rootReducer;
