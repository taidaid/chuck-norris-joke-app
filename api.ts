export const httpRequest = (url: string, options?: any) =>
  fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const get10Jokes = () =>
  httpRequest("http://api.icndb.com/jokes/random/10");
