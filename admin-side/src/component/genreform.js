import React from "react";
import { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGenre } from "../store/action/actionCreator";

const FormGenre = () => {
  const [data, setData] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitMovie = (e) => {
    e.preventDefault();
    dispatch(addGenre(data)).then(() => {
      navigate("/genre");
    });
  };
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  return (
    <Form onSubmit={(e) => submitMovie(e)} className="container">
      <h1 className="mt-5">Create Genre</h1>
      <hr />
      <Form.Group controlId="formTitle">
        <Form.Label>Genre</Form.Label>
        <input
          className="form-control"
          onChange={(e) => handleInput(e)}
          id="name"
          value={data.name}
          type="text"
          placeholder="Enter title"
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormGenre;
