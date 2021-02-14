import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Joke.css";

interface Props {
  jokeText: string;
  jokeCategories: string[];
}

const Joke = ({ jokeText, jokeCategories }: Props) => {
  console.log(jokeCategories);
  const jokeCategoriesList = jokeCategories.map((category, i) => (
    <li
      key={`${category}-${i}`}
      className="joke-categories-list joke-categories-list__joke-category"
    >
      {category}
    </li>
  ));

  return (
    <Card className="joke">
      <Card.Body>
        <Row>
          <Col>
            <p>{jokeText}</p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <ul className="joke-categories-list">{jokeCategoriesList}</ul>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Joke;
