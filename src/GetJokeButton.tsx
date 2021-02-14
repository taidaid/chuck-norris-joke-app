import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { get10Jokes } from "./api";
import { Joke } from "./interfaces";

interface Props {
  setRandom10Jokes: Dispatch<SetStateAction<Joke[]>>;
  handleShowModal: () => void;
}

const GetJokeButton = ({ setRandom10Jokes, handleShowModal }: Props) => {
  const handleClick = () => {
    get10Jokes().then((data) => {
      setRandom10Jokes(data.value);
      handleShowModal();
    });
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
