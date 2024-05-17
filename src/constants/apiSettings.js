export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};
