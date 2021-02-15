import React from "react";
import { Row, Col } from "react-bootstrap";
import { Joke } from "./interfaces";
import JokeCard from "./JokeCard/JokeCard";

interface Props {
  favoriteJokes: Joke[];
  handleClick: (joke: Joke) => void;
}

const Favorites = ({ favoriteJokes, handleClick }: Props) => {
  const favoriteJokesList = favoriteJokes.map((joke) => (
    <JokeCard key={joke.id} joke={joke} handleClick={handleClick} />
  ));
  return (
    <Row>
      <Col className="text-center">
        <h2>All-Time Favorites</h2>
        {favoriteJokesList}
      </Col>
    </Row>
  );
};

export default Favorites;
