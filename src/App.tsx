import React, { useState } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites";
import { Joke } from "./interfaces";
import GetJokeButton from "./GetJokeButton";
import RandomJokesModal from "./RandomJokesModal";

function App() {
  const exampleJoke: Joke = {
    id: 391,
    joke: "TNT was originally developed by Chuck Norris to cure indigestion.",
    categories: ["nerdy", "explicit"],
  };
  const [favoriteJokes, setFavoriteJokes] = useState<Joke[]>([exampleJoke]);
  const [random10Jokes, setRandom10Jokes] = useState<Joke[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Container className="App">
      <Header />
      <Favorites favoriteJokes={favoriteJokes} />
      <GetJokeButton
        setRandom10Jokes={setRandom10Jokes}
        handleShowModal={handleShowModal}
      />
      <RandomJokesModal
        showModal={showModal}
        handleClose={handleCloseModal}
        random10Jokes={random10Jokes}
      />
    </Container>
  );
}

export default App;
