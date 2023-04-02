import React from "react";
import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
// import useFetch from "../hooks/useFecth";
import { useSelector, useDispatch } from "react-redux";
import { showMovie } from "../store/action/actionCreator";
import { useNavigate } from "react-router-dom";
import { deleteMovie } from "../store/action/actionCreator";

const TableList = () => {
  const movies = useSelector((state) => state.movie.movies);
  // const [data] = useFetch("Movie");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editMovie = (id) => {
    navigate("/editmovie/" + id);
  };
  const movieDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  useEffect(() => {
    dispatch(showMovie());
  }, []);

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Movie</th>
            <th>Image</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Trailer</th>
            <th>Synopsis</th>
            <th>Author</th>
            <th>Cast</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>
                  <Image
                    src={movie.imgUrl}
                    style={{ width: "70px", height: "70px" }}
                    roundedCircle
                  />
                </td>

                <td>{movie.Genre.name}</td>
                <td>{movie.rating}</td>
                <td>{movie.trailerUrl}</td>
                <td>{movie.synopsis}</td>
                <td>{movie.User.username}</td>
                <td>
                  {movie.Casts.map((cast) => {
                    return (
                      <Image
                        src={cast.profilePict}
                        style={{ width: "70px", height: "70px" }}
                        title={cast.name}
                        roundedCircle
                      />
                    );
                  })}
                </td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      editMovie(movie.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      movieDelete(movie.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
