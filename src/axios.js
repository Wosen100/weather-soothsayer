import axios from "axios";

export class AlertError extends Error {
  constructor(message, error) {
    super();
    console.error(error);
    alert(message);
  }
}

export const Axios = (url) =>
  axios.get(url)
    .then((res) => res.data)
    .catch((error) => new AlertError(`Error: request to ${url} failed`, error));
