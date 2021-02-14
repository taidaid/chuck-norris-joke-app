import React, { useState } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites";
import { JokeInterface } from "./interfaces";
import GetJokeButton from "./GetJokeButton";

function App() {
  const exampleJoke: JokeInterface = {
    id: 391,
    joke: "TNT was originally developed by Chuck Norris to cure indigestion.",
    categories: ["nerdy", "explicit"],
  };
  const [favoriteJokes, setFavoriteJokes] = useState<JokeInterface[]>([
    exampleJoke,
  ]);
  const [random10Jokes, setRandom10Jokes] = useState<JokeInterface[]>([]);

  return (
    <Container className="App">
      <Header />
      <Favorites favoriteJokes={favoriteJokes} />
      <GetJokeButton setRandom10Jokes={setRandom10Jokes} />
    </Container>
  );
}

export default App;
