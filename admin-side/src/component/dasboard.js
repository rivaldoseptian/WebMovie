import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showGenre, showMovie } from "../store/action/actionCreator";

const Dashboard = () => {
  const movies = useSelector((state) => state.movie.movies);
  const genres = useSelector((state) => state.genre.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMovie());
    dispatch(showGenre());
  }, []);
  return (
    <div className="container mt-5">
      <h1>Dasboard</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6 mb-3" id="total-Movie">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Total Movie</h6>
                  <h6 className="card-title card-number" id="total-Movie">
                    {movies.length}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="card" id="total-genre">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Total Genre</h6>
                  <h6 className="card-title card-number" id="total-genre">
                    {genres.length}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
