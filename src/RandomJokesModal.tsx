import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import { JokeInterface } from "./interfaces";
import Joke from "./Joke/Joke";

interface Props {
  showModal: boolean;
  handleClose: () => void;
  random10Jokes: JokeInterface[];
}

const RandomJokesModal = ({ showModal, handleClose, random10Jokes }: Props) => {
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {random10Jokes.map((joke) => (
          <Joke
            key={joke.id}
            jokeText={joke.joke}
            jokeCategories={joke.categories}
          ></Joke>
        ))}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RandomJokesModal;
