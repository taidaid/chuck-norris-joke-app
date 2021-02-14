import React from "react";
import { Card, Row, Col } from "react-bootstrap";

interface Props {
  jokeCategories: string[];
}

const JokeCardFooter = ({ jokeCategories }: Props) => {
  const jokeCategoriesList = jokeCategories.map((category, i) => (
    <li
      key={`${category}-${i}`}
      className="joke-categories-list joke-categories-list__joke-category"
    >
      {category}
    </li>
  ));
  if (jokeCategories.length) {
    return (
      <Card.Footer>
        <Row>
          <Col>
            <ul className="joke-categories-list">{jokeCategoriesList}</ul>
          </Col>
        </Row>
      </Card.Footer>
    );
  } else {
    return null;
  }
};

export default JokeCardFooter;
