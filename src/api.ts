import { Joke } from "./interfaces";

export const httpRequest = (url: string, options?: any) =>
  fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const get10Jokes = (): Promise<{
  type: string;
  value: Joke[];
}> => httpRequest("http://api.icndb.com/jokes/random/10");
