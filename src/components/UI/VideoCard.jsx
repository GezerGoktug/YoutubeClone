import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { types } from "../../constants/types";

const VideoCard = ({ type, videoİnfo }) => {
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  const {
    channelThumbnail,
    channelTitle,
    publishedTimeText,
    richThumbnail,
    thumbnail,
    videoId,
    title,
    viewCount,
  } = videoİnfo;

  switch (type) {
    case types.VERTICAL_CARD:
      return (
        <div
          onClick={() => navigate(`/detail/${videoId}`)}
          className="  cursor-pointer text-white  flex flex-col gap-3"
        >
          <img
            className="rounded-lg"
            src={
              richThumbnail && isHover
                ? richThumbnail[0].url
                : thumbnail[thumbnail.length - 1].url
            }
            alt={title}
          />
          <div className="flex justify-start gap-3">
            <img
              className="w-[40px] min-[360px]:w-[12%]  mb-auto rounded-full object-contain"
              src={
                channelThumbnail
                  ? channelThumbnail[0].url
                  : "/img/defaultprofile.png"
              }
              alt={title}
            />
            <div className=" flex flex-col ">
              <h2 className="font-medium text-lg ">{title}</h2>
              <h3 className="text-zinc-400">{channelTitle}</h3>
              <div className="text-zinc-400   text-sm  flex flex-wrap gap-x-2 gap-y-1 justify-start">
                <span>
                  {(viewCount && millify(viewCount)) || 0} Görüntülenme
                </span>
                <span> {publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      );
    case types.HORIZONTAL_CARD:
      return (
        <div
          className=" cursor-pointer text-white  flex  gap-3"
          onClick={() => navigate(`/detail/${videoId}`)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            className="rounded-lg  h-20 min-[400px]:h-24 min-[550px]:h-36 min-[1000px]:h-20 min-[1200px]:h-24 "
            src={
              richThumbnail && isHover ? richThumbnail[0].url : thumbnail[0].url
            }
            alt=""
          />

          <div className="flex flex-col ">
            <h2 className="font-medium text-lg min-[550px]:text-xl min-[1000px]:text-base min-[1200px]:text-lg">
              {title}
            </h2>
            <h3 className="text-zinc-400 text-base min-[1000px]:text-sm min-[1200px]:text-base">
              {channelTitle}
            </h3>
            <div className="text-zinc-400 text-[12px] min-[550px]:text-sm min-[1000px]:text-[13px] flex flex-col flex-wrap min-[400px]:flex-row  gap-x-2 justify-start">
              <span>{(viewCount && millify(viewCount)) || 0} Görüntülenme</span>
              <span>{publishedTimeText}</span>
            </div>
          </div>
        </div>
      );
    case types.SEARCH_CARD:
      return (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate(`/detail/${videoId}`)}
          className="cursor-pointer  text-white   flex flex-col min-[600px]:flex-row gap-4 min-[600px]:gap-6"
        >
          <img
            className="rounded-lg min-[600px]:h-36 min-[900px]:h-44 min-[1200px]:h-52 "
            src={
              richThumbnail && isHover ? richThumbnail[0].url : thumbnail[0].url
            }
            alt={title}
          />

          <div className="flex flex-col   gap-2 ">
            <h2 className="font-medium  text-lg min-[600px]:text-2xl">
              {title}
            </h2>
            <div className="text-zinc-400  text-sm min-[600px]:text-base flex   gap-x-2 justify-start">
              <span>{(viewCount && millify(viewCount)) || 0} Görüntülenme</span>
              <span>{publishedTimeText}</span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                className="rounded-full h-6 min-[600px]:h-8"
                src={
                  channelThumbnail
                    ? channelThumbnail[0].url
                    : "/img/defaultprofile.png"
                }
                alt={channelTitle}
              />
              <h3 className="text-zinc-400  text-sm min-[600px]:text-base">
                {channelTitle}
              </h3>
            </div>
          </div>
        </div>
      );
  }
};

export default VideoCard;
