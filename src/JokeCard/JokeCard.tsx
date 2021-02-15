import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Joke } from "../interfaces";
import { isJokeAlreadyFavorite } from "../utils";
import "./JokeCard.css";
import JokeCardFooter from "./JokeCardFooter";

interface Props {
  joke: Joke;
  handleClick: (joke: Joke) => void;
  favoriteJokes?: Joke[];
}

const JokeCard = ({ joke, handleClick, favoriteJokes }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  const cardClasses = () => {
    let classes = "joke shadow-sm mb-4 ";
    if (isHovered) {
      classes += " border-primary ";
    }
    if (favoriteJokes && isJokeAlreadyFavorite(favoriteJokes, joke)) {
      classes += " bg-primary ";
    }

    return classes;
  };

  return (
    <Card
      className={cardClasses()}
      onClick={() => handleClick(joke)}
      style={{ cursor: "pointer" }}
      onMouseOver={() => handleHover(true)}
      onMouseOut={() => handleHover(false)}
    >
      <Card.Body>
        <Row>
          <Col>
            <p>{joke.joke.replace(/&quot;/g, '"')}</p>
          </Col>
        </Row>
      </Card.Body>
      <JokeCardFooter jokeCategories={joke.categories} />
    </Card>
  );
};

export default JokeCard;
