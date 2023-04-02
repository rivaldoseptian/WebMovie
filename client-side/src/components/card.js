import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showMovie } from "../store/action/actionCreator";
import { useNavigate } from "react-router-dom";

const CardComponent = () => {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailMovie = (id) => {
    navigate("/detail/" + id);
  };
  useEffect(() => {
    dispatch(showMovie());
  }, []);
  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="bx" key={movie.id}>
            <img src={movie.imgUrl} alt="" />
            <div className="content gap-0">
              <h3>
                <a
                  onClick={() => {
                    detailMovie(movie.id);
                  }}
                >
                  {movie.title}
                </a>
              </h3>
              <p>Action</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardComponent;
