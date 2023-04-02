import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../store/action/actionCreator";
const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    imgUrl: "",
    genreId: "",
    rating: "",
    trailerUrl: "",
    synopsis: "",
    authorId: "",
  });
  useEffect(() => {
    fetch("http://localhost:3004/Movie/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData({
          title: resp.title,
          imgUrl: resp.imgUrl,
          genreId: resp.genreId,
          rating: resp.rating,
          trailerUrl: resp.trailerUrl,
          synopsis: resp.synopsis,
          authorId: resp.authorId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  const submitMovie = (e) => {
    e.preventDefault();
    dispatch(editMovie(data, id)).then(() => {
      navigate("/");
    });
  };

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <Form onSubmit={(e) => submitMovie(e)} className="container">
      <h1>Edit Movie</h1>
      <hr />
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="title"
          value={data.title}
          type="text"
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group controlId="formImgUrl">
        <Form.Label>Image URL</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="imgUrl"
          value={data.imgUrl}
          type="text"
          placeholder="Enter image URL"
        />
      </Form.Group>

      <Form.Group controlId="formGenre">
        <Form.Label>Genre</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="genreId"
          value={data.genreId}
          type="number"
          placeholder="Enter genre"
        />
      </Form.Group>

      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="rating"
          value={data.rating}
          type="number"
          placeholder="Enter rating"
        />
      </Form.Group>

      <Form.Group controlId="formTrailer">
        <Form.Label>Trailer</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="trailerUrl"
          value={data.trailerUrl}
          type="text"
          placeholder="Enter trailer"
        />
      </Form.Group>

      <Form.Group controlId="formSynopsis">
        <Form.Label>Synopsis</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="synopsis"
          value={data.synopsis}
          as="textarea"
          rows={3}
          placeholder="Enter synopsis"
        />
      </Form.Group>

      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="authorId"
          value={data.authorId}
          type="number"
          placeholder="Enter author"
        />
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditMovie;
