import { useParams } from "react-router-dom";
import CommentCard from "../components/UI/CommentCard";
import Comments from "../components/layout/VideoDetail/Comments";
import Video from "../components/layout/VideoDetail/Video";
import VideoCard from "../components/UI/VideoCard";
import VideoDetail from "../components/layout/VideoDetail/VideoDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetail } from "../redux/actions/videosAction";
import VideoSkeletonCard from "../components/UI/VideoSkeletonCard";
import Loader from "../components/layout/Loader";
import { types } from "../constants/types";

const Details = () => {
  const { isLoading, video } = useSelector((state) => state.detailSlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  //! Video detay sayfasına girildiği an sayfa URL parametresinden...
  //! video id sini çekip ilgili videonun detaylarını almak için...
  //! ilgili thunk aksiyonunu id parametresi göndererek çalıştırıyoruz
  useEffect(() => {
    dispatch(getVideoDetail({ id }));
  }, [id]);

  return (
    <div
      id="detail"
      style={{ maxHeight: "calc(100vh - 64px)" }}
      className=" text-white w-full col-span-12 min-[1200px]:col-span-6 min-[1300px]:w-[95%] min-[1400px]:w-[90%]  mx-auto  overflow-y-auto  py-8  grid  grid-cols-[auto_full] min-[1000px]:grid-cols-[auto_360px]  min-[1200px]:grid-cols-[auto_400px] gap-3 min-[1200px]:gap-6 "
    >
      <div className=" flex flex-col">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col  gap-2">
              <Video url={`https://www.youtube.com/watch?v=${id}`} />
              {video && <VideoDetail video={video.videoİnfo} />}
            </div>
            {video && (
              <Comments commentCount={video.videoİnfo.commentCountText}>
                {video.comments &&
                  video.comments.data.map((comment) => (
                    <CommentCard key={comment.commentId} comment={comment} />
                  ))}
              </Comments>
            )}
          </>
        )}
      </div>
      <div className="mt-8 min-[1000px]:mt-0  flex flex-col gap-4 min-[1000px]:gap-2">
        {isLoading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <VideoSkeletonCard key={item} type={types.HORIZONTAL_CARD} />
            ))
          : video?.videoİnfo.relatedVideos.data.map((video) => (
              <VideoCard
                key={video.videoId}
                videoİnfo={video}
                type={types.HORIZONTAL_CARD}
              />
            ))}
      </div>
    </div>
  );
};

export default Details;
