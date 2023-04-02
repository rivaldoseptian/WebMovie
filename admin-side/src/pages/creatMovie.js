import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createMovie, showGenre } from "../store/action/actionCreator";

function CreateMovie() {
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
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(createMovie(formData)).then(() => {
      navigate("/");
    });
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
            disabled={!genres || genres.length === 0}
          >
            <option value="">- select genre -</option>

            {genres?.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
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

export default CreateMovie;
