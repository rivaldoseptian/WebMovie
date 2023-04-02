import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { editMovie, showGenre } from "../store/action/actionCreator";
import { BaseUrl } from "../component/baseUrl";

function MovieEdit() {
  const { id } = useParams();
  const genres = useSelector((state) => state.genre.genres);
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rating, setRating] = useState(null);
  const [genreId, setGenreId] = useState(null);
  const [cast, setCast] = useState([
    { name: "", profilePict: "" },
    { name: "", profilePict: "" },
    { name: "", profilePict: "" },
  ]);

  useEffect(() => {
    dispatch(showGenre());
    fetch(BaseUrl + "/movies/detail/" + id, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((response) => {
        setTitle(response.title);
        setSynopsis(response.synopsis);
        setTrailerUrl(response.trailerUrl);
        setImgUrl(response.imgUrl);
        setRating(response.rating);
        setGenreId(response.genreId);
        setCast(
          response.Casts.map((c) => ({
            name: c.name,
            profilePict: c.profilePict,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      synopsis,
      trailerUrl,
      imgUrl,
      rating,
      genreId,
      name: cast.map((c) => c.name),
      profilePict: cast.map((c) => c.profilePict),
    };
    dispatch(editMovie(id, formData));
  };

  const handleCastChange = (event, index) => {
    const { name, value } = event.target;
    const updatedCast = [...cast];
    updatedCast[index] = {
      ...updatedCast[index],
      [name]: value,
    };
    setCast(updatedCast);
  };

  const castFields = cast.map((c, index) => (
    <div key={index}>
      <Form.Group controlId="formGenre">
        <Form.Label>Cast {index + 1} Name</Form.Label>
        <input
          className="form-control"
          type="text"
          value={c.name}
          onChange={(event) => handleCastChange(event, index)}
          name="name"
        />
      </Form.Group>
      <Form.Group controlId="formGenre">
        <Form.Label>Cast {index + 1} ProfilePict</Form.Label>
        <input
          className="form-control"
          type="text"
          value={c.profilePict}
          onChange={(event) => handleCastChange(event, index)}
          name="profilePict"
        />
      </Form.Group>
    </div>
  ));

  return (
    <div className="container">
      <h1>Crate Movie</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Synopsis</Form.Label>
          <input
            className="form-control"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            as="textarea"
            rows={3}
            placeholder="Enter synopsis"
          />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Trailer</Form.Label>
          <input
            className="form-control"
            type="text"
            value={trailerUrl}
            onChange={(e) => setTrailerUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTrailer">
          <Form.Label>Image URL</Form.Label>
          <input
            className="form-control"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGenre">
          <Form.Label>Rating</Form.Label>
          <input
            className="form-control"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
          >
            {genres.map((genre) => {
              return <option value={genre.id}>{genre.name}</option>;
            })}
          </Form.Select>
        </Form.Group>

        {castFields}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default MovieEdit;
