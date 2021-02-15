import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Joke } from "../interfaces";
import "./JokeCard.css";
import JokeCardFooter from "./JokeCardFooter";

interface Props {
  joke: Joke;
  handleClick: (joke: Joke) => void;
}

const JokeCard = ({ joke, handleClick }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <Card
      className={`joke shadow-sm mb-4 border-dark ${isHovered && "bg-primary"}`}
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
