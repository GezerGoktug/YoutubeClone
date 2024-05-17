import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../components/UI/VideoCard";
import VideoSkeletonCard from "../components/UI/VideoSkeletonCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchVideos } from "../redux/actions/videosAction";
import { types } from "../constants/types";

const Search = () => {
  const dispatch = useDispatch();
  const { videos, isLoading } = useSelector((state) => state.videosSlice);
  const { searchText } = useParams();
  //! Arama sayfasına yönlendirildiğmizde arama sayfasının...
  //! URL parametresinden  arama sorgusunu alıp ilgili asenkron redux thunk ...
  //! aksiyonunu çalıştırıyoruz.
  useEffect(() => {
    dispatch(searchVideos({ query: searchText }));
  }, [searchText]);
  return (
    <div
      id="search"
      style={{ maxHeight: "calc(100vh - 90px)" }}
      className="overflow-y-auto min-[600px]:ms-4 my-3 col-span-12  min-[970px]:col-span-11 min-[1200px]:col-span-5 flex flex-col gap-6 min-[600px]:gap-4"
    >
      {isLoading
        ? [1, 2, 3, 4, 5, 6].map((item) => (
            <VideoSkeletonCard key={item} type={types.SEARCH_CARD} />
          ))
        : videos.map((video) => (
            <VideoCard
              key={video.videoId}
              videoİnfo={video}
              type={types.SEARCH_CARD}
            />
          ))}
    </div>
  );
};

export default Search;
