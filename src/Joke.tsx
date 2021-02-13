import React from "react";
import { Row } from "react-bootstrap";

interface Props {
  jokeText: string;
  jokeCategories: string[];
}

const Joke = ({ jokeText, jokeCategories }: Props) => {
  const jokeCategoriesList = jokeCategories.map((category, i) => (
    <li key={`${category}-${i}`}></li>
  ));

  return (
    <Row>
      <p>{jokeText}</p>
      <ul>{jokeCategoriesList}</ul>
    </Row>
  );
};

export default Joke;
