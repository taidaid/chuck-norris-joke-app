import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { get10Jokes } from "./api";
import { JokeInterface } from "./interfaces";

interface Props {
  setRandom10Jokes: Dispatch<SetStateAction<JokeInterface[]>>;
}

const GetJokeButton = ({ setRandom10Jokes }: Props) => {
  const handleClick = () => {
    get10Jokes().then((data) => setRandom10Jokes(data.value));
  };
  return (
    <Row className="fixed-bottom text-center">
      <Col>
        <Button variant="primary" className="mb-3" onClick={handleClick}>
          Have a Chuckle
        </Button>
      </Col>
    </Row>
  );
};

export default GetJokeButton;
