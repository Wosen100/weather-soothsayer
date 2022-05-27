import { Axios } from "axios";

export class AlertError extends Error {
  constructor(message, error) {
    super();
    console.error(error);
    alert(message);
  }
}

export const axios = (url) =>
  Axios(url)
    .then((res) => res.json())
    .catch((error) => new AlertError(`Error: request to ${url} failed`, error));
