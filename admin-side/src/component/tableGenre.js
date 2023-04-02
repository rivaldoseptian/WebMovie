import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteGenre, showGenre } from "../store/action/actionCreator";

const TableGenre = () => {
  const genres = useSelector((state) => state.genre.genres);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genreDelete = (id) => {
    dispatch(deleteGenre(id));
  };

  const addGenre = () => {
    navigate("/creategenre");
  };

  useEffect(() => {
    dispatch(showGenre());
  }, []);
  return (
    <div className="container">
      <h1 className="mt-5">Genre</h1>
      <button
        onClick={() => {
          addGenre();
        }}
        className="btn btn-primary rounded-pill"
        id="new-movie"
      >
        <span className="icon material-symbols-outlined">add</span>New Genre
      </button>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Genre</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => {
            return (
              <tr key={genre.id}>
                <th scope="row">{index + 1}</th>
                <td>{genre.name}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      genreDelete(genre.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenre;
