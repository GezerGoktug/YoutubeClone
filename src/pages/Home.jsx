import { useEffect } from "react";
import VideoCard from "../components/UI/VideoCard";
import VideoSkeletonCard from "../components/UI/VideoSkeletonCard";
import { icons } from "../constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../redux/actions/videosAction";
import { useNavigate } from "react-router-dom";
import { types } from "../constants/types";

const Home = () => {
  const { videos, isLoading } = useSelector((state) => state.videosSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //! Ana sayfaya girildiği an videoları apiden çekmek için...
  //! ilgili thunk aksiyonu çalıştır.
  useEffect(() => {
    dispatch(getVideos({}));
  }, []);

  return (
    <main className="min-[970px]:ms-8 col-span-12  min-[970px]:col-span-11 min-[1200px]:col-span-5 min-[450px]:py-3 ">
      <div
        id="tags"
        className="mb-4  flex flex-nowrap gap-2 pb-2 overflow-x-auto"
      >
        {icons.explore.map((icon, i) => (
          <span
            key={i}
            onClick={() =>
              icon.isTherePages &&
              navigate(`/category/${icon.label.toLowerCase()}`)
            }
            className="cursor-pointer text-[11px] min-[450px]:text-base text-nowrap hover:bg-zinc-700 transition-colors py-1 min-[450px]:py-2 px-2 min-[450px]:px-4 bg-zinc-800 font-semibold rounded-lg text-white"
          >
            {icon.label}
          </span>
        ))}
      </div>

      <div
        id="videos"
        style={{ maxHeight: "calc(100vh - 154px)" }}
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

export default Home;
