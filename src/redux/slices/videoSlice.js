import { createSlice } from "@reduxjs/toolkit";
import { getVideos, searchVideos } from "../actions/videosAction";

//! Videoları  ve bunu apidan çekerken...
//! yukleme durumunu ve hata durumunu tutacak state
const initialState = {
  error: false,
  isLoading: false,
  videos: [],
};

//! Apidan videoları çekerken bekleme ,hata,ve başarılı durumlarda,
//! state i guncelleyecek reducer ları tutan slice
export const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    //! İlk açılışta  ilgili videolar apiden cekilirken,
    //! başarılı olursa bu videoaları state e aktar.Yukleme durumunu bitir.
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    });
    //! İlk açılışta gore ilgili videolar apiden cekilirken,
    //! yukleme durum state ini guncelle.
    builder.addCase(getVideos.pending, (state) => {
      state.isLoading = true;
    });
    //! Arama filtrelerine gore ilgili videolar apiden cekilirken,
    //! başarılı olursa bu videoaları state e aktar.Yukleme durumunu bitir.
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.isLoading = false;
    });
    //! Arama filtrelerine gore ilgili videolar apiden cekilirken,
    //! yukleme durum state ini guncelle.
    builder.addCase(searchVideos.pending, (state) => {
      state.isLoading = true;
    });
  },
});
