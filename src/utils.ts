import { Joke } from "./interfaces";

export const isJokeAlreadyFavorite = (favoriteJokes: Joke[], joke: Joke) =>
  !!favoriteJokes.find((favJoke) => joke.id === favJoke.id);
