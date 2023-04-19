import axios from "axios";

export default axios.create({
  baseURL: "https://9c96-103-106-239-104.ap.ngrok.io",
  // baseURL: "http://localhost:8080/api/v1/movies",
  //baseURL: "http://localhost:3030",
  headers: { "ngrok-skip-browser-warning": "true" },
});
