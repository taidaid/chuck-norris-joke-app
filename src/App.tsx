import React, { useEffect, useState } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
import Favorites from "./Favorites/Favorites";
import { Joke } from "./interfaces";
import GetJokeButton from "./GetJokeButton";
import RandomJokesModal from "./RandomJokesModal/RandomJokesModal";
import { get10Jokes } from "./api";
import { isJokeAlreadyFavorite } from "./utils";

function App() {
  const maxFavJokes = 10;
  const [favoriteJokes, setFavoriteJokes] = useState<Joke[]>([]);
  const [random10Jokes, setRandom10Jokes] = useState<Joke[]>([]);
  const [addJokeTimers, setAddJokeTimers] = useState<
    ReturnType<typeof setTimeout>[]
  >([]);
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
    if (isJokeAlreadyFavorite(favoriteJokes, joke)) {
      return;
    }

    // if add favorites is not full, add joke
    setFavoriteJokes((prevState) =>
      prevState.length < maxFavJokes ? [...prevState, joke] : prevState
    );
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleAddRandomJokesOnTimer = () => {
    // if there is room in favorites and no timers exist
    if (favoriteJokes.length < maxFavJokes && addJokeTimers.length === 0) {
      // record which jokes are stacked to be added
      let newJokeIdStack: number[] = [];

      // find jokes that aren't in favorites or newJokeIdStack (queue for adding jokes by timer)
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
        if (!nonDuplicateJokes[0]) {
          return;
        }
        newJokeIdStack.push(nonDuplicateJokes[0].id);

        return nonDuplicateJokes[0];
      };

      // get 10 new jokes
      get10Jokes().then((data) => {
        const newJokes = data.value;

        let i = favoriteJokes.length;
        let delay = 0;
        // while the count is less than 10, queue up another joke to add
        while (i < maxFavJokes) {
          const timer = setTimeout(() => {
            const nonDuplicateJoke = findNonDuplicateJoke(
              newJokes,
              favoriteJokes
            );
            if (nonDuplicateJoke) {
              handleAddToFavorites(nonDuplicateJoke);
            }
          }, delay);
          setAddJokeTimers((prevState) => [...prevState, timer]);
          delay += 5000;
          i++;
        }
      });
    } else if (addJokeTimers.length) {
      addJokeTimers.forEach((addJokeTimer) => clearTimeout(addJokeTimer));
      setAddJokeTimers([]);
    }
  };

  // when favorite jokes count has reached max, be sure all timers are cleared
  useEffect(() => {
    if (favoriteJokes.length === maxFavJokes && addJokeTimers.length) {
      addJokeTimers.forEach((timer) => clearTimeout(timer));
      setAddJokeTimers([]);
    }
  }, [favoriteJokes, addJokeTimers]);

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
      <Header
        handleClick={handleAddRandomJokesOnTimer}
        addJokeTimers={addJokeTimers}
      />
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
        favoriteJokes={favoriteJokes}
      />
    </Container>
  );
}

export default App;
