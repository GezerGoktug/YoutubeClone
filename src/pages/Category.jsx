import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../redux/actions/videosAction";
import VideoSkeletonCard from "../components/UI/VideoSkeletonCard";
import VideoCard from "../components/UI/VideoCard";
import { useParams } from "react-router-dom";
import { types } from "../constants/types";

const Category = () => {
  const { videos, isLoading } = useSelector((state) => state.videosSlice);
  const dispatch = useDispatch();
  const { category } = useParams();
  //!  Kategori değiştiğinde ilgili kategorideki videoları yeniden getir
  useEffect(() => {
    dispatch(
      getVideos({ category: category === "trends" ? "trending" : category })
    );
  }, [category]);
  return (
    <main className="min-[970px]:ms-8 col-span-12  min-[970px]:col-span-11 min-[1200px]:col-span-5 min-[450px]:py-3 ">
      <div
        id="category"
        style={{ maxHeight: "calc(100vh - 94px)" }}
        className="overflow-y-auto grid   grid-cols-1 min-[668px]:grid-cols-2 min-[1100px]:grid-cols-3   gap-x-4 gap-y-8"
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <VideoSkeletonCard key={item} type={types.VERTICAL_CARD} />
            ))
          : videos.map((video) => (
              <VideoCard
                key={video.videoId}
                videoİnfo={video}
                type={types.VERTICAL_CARD}
              />
            ))}
      </div>
    </main>
  );
};

export default Category;
