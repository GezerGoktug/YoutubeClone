import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/apiSettings";

//! Videoları getirmek için asenkron işlem
export const getVideos = createAsyncThunk("getVideos", async ({ category }) => {
  const newOptions = {
    ...options,
    url: `https://yt-api.p.rapidapi.com/${
      category
        ? category === "trending"
          ? category
          : `hashtag?tag=` + category
        : "home"
    }`,
  };

  const { data } = await axios.request(newOptions);
  const newVideos = data.data.filter((video) => video.type === "video");
  return newVideos;
});

//! Video arama işlemi için asenkron işlem
export const searchVideos = createAsyncThunk(
  "getSearchVideos",
  async ({ query }) => {
    const newOptions = {
      ...options,
      url: `https://yt-api.p.rapidapi.com/search`,
      params: {
        query: query,
      },
    };
    const { data } = await axios.request(newOptions);
    const newVideos = data.data.filter((video) => video.type === "video");
    return newVideos;
  }
);

//! Video detaylarını getirmek için asenkron işlem
export const getVideoDetail = createAsyncThunk(
  "getVideoDetail",
  async ({ id }) => {
    const newOptions = {
      ...options,
      url: `https://yt-api.p.rapidapi.com/video/info`,
      params: {
        id: id,
        extend: 1,
      },
    };
    //! Video detaylarını almak için API isteği yap
    const { data: videoİnfo } = await axios.request(newOptions);
    //! Yorumları almak için ayarları güncelle
    const updatedOptions = {
      ...newOptions,
      url: "https://yt-api.p.rapidapi.com/comments",
    };
    //! Yorumları almak için API isteği yap
    const { data: comments } = await axios.request(updatedOptions);
    //! Video detayları ve yorumları döndür
    return { videoİnfo, comments };
  }
);
