import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./JokeCard.css";
import JokeCardFooter from "./JokeCardFooter";

interface Props {
  jokeText: string;
  jokeCategories: string[];
}

const JokeCard = ({ jokeText, jokeCategories }: Props) => {
  return (
    <Card className="joke shadow-sm mb-3">
      <Card.Body>
        <Row>
          <Col>
            <p>{jokeText.replace(/&quot;/g, '"')}</p>
          </Col>
        </Row>
      </Card.Body>
      <JokeCardFooter jokeCategories={jokeCategories} />
    </Card>
  );
};

export default JokeCard;
