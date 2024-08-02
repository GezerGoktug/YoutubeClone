import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
});

export default api;
