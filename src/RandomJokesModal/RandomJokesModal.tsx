import React from "react";
import { Modal } from "react-bootstrap";
import { Joke } from "../interfaces";
import JokeCard from "../JokeCard/JokeCard";
import "./RandomJokesModal.css";

interface Props {
  showModal: boolean;
  handleClose: () => void;
  random10Jokes: Joke[];
  handleClick: (joke: Joke) => void;
  favoriteJokes: Joke[];
}

const RandomJokesModal = ({
  showModal,
  handleClose,
  random10Jokes,
  handleClick,
  favoriteJokes,
}: Props) => {
  const randomJokes = random10Jokes.map((joke) => (
    <JokeCard
      key={joke.id}
      joke={joke}
      handleClick={handleClick}
      favoriteJokes={favoriteJokes}
    ></JokeCard>
  ));
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      className="my-modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{randomJokes}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RandomJokesModal;
