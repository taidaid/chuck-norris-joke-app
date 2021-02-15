import React, { useEffect, useState } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites/Favorites";
import { Joke } from "./interfaces";
import GetJokeButton from "./GetJokeButton";
import RandomJokesModal from "./RandomJokesModal";
import { get10Jokes } from "./api";

function App() {
  const maxFavJokes = 10;
  const [favoriteJokes, setFavoriteJokes] = useState<Joke[]>([]);
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
    const isJokeAlreadyFavorite = (favoriteJokes: Joke[]) =>
      favoriteJokes.find((favJoke) => joke.id === favJoke.id);
    if (isJokeAlreadyFavorite(favoriteJokes) || favoriteJokes.length >= 10)
      return;

    setFavoriteJokes((prevState) =>
      prevState.length < maxFavJokes ? [...prevState, joke] : prevState
    );
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleAddRandomJokesOnTimer = () => {
    // if there is room in favorites
    if (favoriteJokes.length < maxFavJokes) {
      // record which jokes are stacked to be added
      let newJokeIdStack: number[] = [];

      // find jokes that aren't in favorites or newJokeIdStack
      const findNonDuplicateJoke = (
        newJokes: Joke[],
        favoriteJokes: Joke[]
      ) => {
        const favJokeIds = favoriteJokes.map((favJoke) => favJoke.id);
        const nonDuplicateJokes = newJokes.filter(
          (newJoke) =>
            !favJokeIds.includes(newJoke.id) &&
            !newJokeIdStack.includes(newJoke.id)
        );
        newJokeIdStack.push(nonDuplicateJokes[0].id);
        return nonDuplicateJokes[0];
      };

      // get 10 new jokes
      get10Jokes().then((data) => {
        const newJokes = data.value;

        let i = favoriteJokes.length;
        let delay = 1000;
        // while the count is less than 10, queue up another joke to add
        while (i < maxFavJokes) {
          setTimeout(() => {
            const nonDuplicateJoke = findNonDuplicateJoke(
              newJokes,
              favoriteJokes
            );
            handleAddToFavorites(nonDuplicateJoke);
          }, delay);
          delay += 1000;
          i++;
        }
      });
    }
  };

  // check for jokes from previous session in local storage
  useEffect(() => {
    const storedJokes = localStorage.getItem("favoriteJokes");
    if (storedJokes) {
      setFavoriteJokes(JSON.parse(storedJokes));
    }
  }, [setFavoriteJokes]);

  // store favorite jokes in local storage on change
  useEffect(() => {
    localStorage.setItem("favoriteJokes", JSON.stringify(favoriteJokes));
  }, [favoriteJokes]);

  return (
    <Container className="App">
      <Header handleClick={handleAddRandomJokesOnTimer} />
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
