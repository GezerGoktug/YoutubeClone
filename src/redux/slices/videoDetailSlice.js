import { createSlice } from "@reduxjs/toolkit";
import { getVideoDetail } from "../actions/videosAction";

//! İlgili Video  detaylarını  ve bunu apidan çekerken...
//! yukleme durumunu ve hata durumunu tutacak state
const initialState = {
  error: false,
  isLoading: false,
  video: null,
};

//! Apidan video detaylarını çekerken bekleme ,hata,ve başarılı durumlarda,
//! state i guncelleyecek reducer ları tutan slice
export const videoDetailSlice = createSlice({
  name: "videoDetail",
  initialState,
  extraReducers: (builder) => {
    //! Başarılı durumda yuklemeyi bitir ve video detayları ile ilgili state guncelle
    builder.addCase(getVideoDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.video = action.payload;
    });
    //! Beklemede yukleme durumunu state ini  guncelle.
    builder.addCase(getVideoDetail.pending, (state) => {
      state.isLoading = true;
    });
  },
});
