import React from "react";
import { Modal } from "react-bootstrap";
import { Joke } from "./interfaces";
import JokeCard from "./JokeCard/JokeCard";

interface Props {
  showModal: boolean;
  handleClose: () => void;
  random10Jokes: Joke[];
  handleClick: (joke: Joke) => void;
}

const RandomJokesModal = ({
  showModal,
  handleClose,
  random10Jokes,
  handleClick,
}: Props) => {
  const randomJokes = random10Jokes.map((joke) => (
    <JokeCard key={joke.id} joke={joke} handleClick={handleClick}></JokeCard>
  ));
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{randomJokes}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RandomJokesModal;
