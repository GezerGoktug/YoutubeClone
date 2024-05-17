import { icons } from "../../../constants/icons";
import millify from "millify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const VideoDetail = ({ video }) => {
  dayjs.extend(relativeTime);
  const {
    title,
    channelThumbnail,
    channelTitle,
    description,
    subscriberCountText,
    viewCount,
    channelBadges,
    likeCount,
    publishDate,
  } = video;
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold my-1">{title}</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-y-4">
        <div className="flex   gap-2 min-[500px]:gap-6">
          <div className="flex gap-3">
            <img
              className=" h-10   min-[500px]:h-12 rounded-full"
              src={channelThumbnail[0].url}
              alt={title}
            />
            <div className="flex  flex-col justify-start gap-1">
              <h2 className="text-sm truncate max-w-32 min-[400px]:max-w-full    min-[500px]:text-base font-semibold flex  items-center gap-2">
                {channelTitle}
                {channelBadges && icons.other.verified}
              </h2>
              <p className="text-[12px] font-medium text-zinc-400">
                {subscriberCountText}
              </p>
            </div>
          </div>
          <button className=" ms-auto min-[500px]:ms-0  px-2 min-[450px]:px-4  font-medium text-[12px] min-[450px]:text-sm bg-slate-50 text-black rounded-full">
            Subscribe
          </button>
        </div>
        <div className=" flex w-max  sm:w-auto items-center gap-2 font-semibold min-[500px]:gap-4 bg-zinc-800 px-2 min-[500px]:px-4 py-2 rounded-full  ">
          <button className="flex items-center pe-2 min-[450px]:pe-4 gap-2 text-sm min-[450px]:text-lg  border-e-2 border-zinc-600">
            {icons.personal[5].icon} {millify(likeCount)}
          </button>
          <button className="flex items-center gap-2 text-sm min-[450px]:text-lg ">
            {icons.other.dislike} 0
          </button>
        </div>
      </div>
      <div className="p-4 rounded-lg mt-2 bg-zinc-800">
        <div className="flex gap-3 font-semibold">
          <span>{millify(viewCount)} views  </span>
          <span>{dayjs(publishDate).fromNow()}</span>
        </div>
        <p className="break-all " >
          {description.split("\n").map((desc, i) => (
            <span key={i}>
              {desc} <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
