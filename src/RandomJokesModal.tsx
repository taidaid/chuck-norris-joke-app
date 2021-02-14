import React from "react";
import { Modal } from "react-bootstrap";
import { Joke } from "./interfaces";
import JokeCard from "./JokeCard/JokeCard";

interface Props {
  showModal: boolean;
  handleClose: () => void;
  random10Jokes: Joke[];
}

const RandomJokesModal = ({ showModal, handleClose, random10Jokes }: Props) => {
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {random10Jokes.map((joke) => (
          <JokeCard
            key={joke.id}
            jokeText={joke.joke}
            jokeCategories={joke.categories}
          ></JokeCard>
        ))}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RandomJokesModal;
