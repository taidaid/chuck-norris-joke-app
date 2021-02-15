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

  const handleRemoveFromFavorites = (joke: Joke) => {
    const foundJokeIndex = favoriteJokes.findIndex(
      (favJoke) => joke.id === favJoke.id
    );
    if (foundJokeIndex !== -1) {
      setFavoriteJokes((prevState) =>
        prevState.filter((_, i) => i !== foundJokeIndex)
      );
    } else {
      console.error("Joke not found");
    }
  };

  const handleAddToFavorites = (joke: Joke) => {
    const isJokeAlreadyFavorite = favoriteJokes.find(
      (favJoke) => joke.id === favJoke.id
    );
    if (isJokeAlreadyFavorite) return;
    setFavoriteJokes((prevState) => [...prevState, joke]);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <Container className="App">
      <Header />
      <Favorites
        favoriteJokes={favoriteJokes}
        handleClick={handleRemoveFromFavorites}
      />
      <GetJokeButton
        setRandom10Jokes={setRandom10Jokes}
        handleShowModal={handleShowModal}
      />
      <RandomJokesModal
        showModal={showModal}
        handleClose={handleCloseModal}
        random10Jokes={random10Jokes}
        handleClick={handleAddToFavorites}
      />
    </Container>
  );
}

export default App;
