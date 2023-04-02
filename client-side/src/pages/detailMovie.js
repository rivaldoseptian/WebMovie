import React, { useEffect } from "react";
import "./detailMovie.css";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { detailMovie } from "../store/action/actionCreator";

const DetailMovie = () => {
  const movie = useSelector((state) => state.movie.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailMovie(id));
  }, []);
  return (
    <>
      <div class="container mt-5 movie-details ">
        <div class="row">
          <div class="col-md-3">
            <img src={movie.imgUrl} class="img-fluid" alt="Poster Film" />
          </div>
          <div class="col-md-6">
            <h1>{movie.title}</h1>
            <p>Genre: {movie.Genre ? movie.Genre.name : "Unknown Genre"}</p>
            <p>Rating: {movie.rating}/10</p>
            <p>Trailer: {movie.trailerUrl}</p>
            <hr />
            <p>Sinopsis:</p>
            <p>{movie.synopsis}</p>
            <hr />
            <p>Cast:</p>
            <div>
              {movie.Casts?.map((cast) => {
                return (
                  <Image
                    className="me-3"
                    src={cast.profilePict}
                    style={{ width: "70px", height: "70px" }}
                    title={cast.name}
                    roundedCircle
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
