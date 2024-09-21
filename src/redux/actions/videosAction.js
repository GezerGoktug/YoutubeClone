import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

//! Videoları getirmek için asenkron işlem
export const getVideos = createAsyncThunk("getVideos", async ({ category }) => {
  const { data } = await api.get(
    `${
      category
        ? category === "trending"
          ? category
          : `hashtag?tag=` + category
        : "home"
    }`
  );
  const newVideos = data.data.filter((video) => video.type === "video");
  return newVideos;
});

//! Video arama işlemi için asenkron işlem
export const searchVideos = createAsyncThunk(
  "getSearchVideos",
  async ({ query }) => {
    const { data } = await api.get(`search?query=${query}`);
    const newVideos = data.data.filter((video) => video.type === "video");
    return newVideos;
  }
);

//! Video detaylarını getirmek için asenkron işlem
export const getVideoDetail = createAsyncThunk(
  "getVideoDetail",
  async ({ id }) => {
    //! Video detaylarını ve yorumları almak için API isteği yap
    const [{ data: videoİnfo }, { data: comments }] = await Promise.all([
      api.get(`/video/info?id=${id}&extend=1`),
      api.get(`/comments?id=${id}`),
    ]);
    //! Video detayları ve yorumları döndür
    return { videoİnfo, comments };
  }
);
