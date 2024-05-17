import { types } from "../../constants/types";

const VideoSkeletonCard = ({ type }) => {
  switch (type) {
    case types.VERTICAL_CARD:
      return (
        <div className=" w-full flex flex-col gap-3">
          <div className="bg-zinc-800 rounded-lg animate-pulse w-full h-64" />
          <div className="flex justify-start gap-3">
            <div className="bg-zinc-800 w-[60px]  animate-pulse h-[70%] rounded-full" />
            <div className="flex flex-col w-full gap-2">
              <div className="bg-zinc-800 rounded-xl h-6 w-1/4 animate-pulse" />
              <div className="bg-zinc-800 rounded-lg h-4 w-1/3 animate-pulse" />
              <div className="bg-zinc-800 rounded-lg h-4 w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      );
    case types.SEARCH_CARD:
      return (
        <div className="cursor-pointer  flex flex-col min-[600px]:flex-row gap-4 min-[600px]:gap-6">
          <div className="rounded-lg  w-full min-[600px]:w-96 h-36 min-[900px]:h-44 min-[1200px]:h-52 bg-zinc-800  animate-pulse" />
          <div className="flex flex-col gap-4">
            <div className=" bg-zinc-800 h-6 w-48 rounded-xl animate-pulse" />
            <div className="  bg-zinc-800  w-24 h-4 rounded-xl animate-pulse" />
            <div className="flex gap-3 items-center">
              <div className="rounded-full w-8 h-8 bg-zinc-800  animate-pulse" />
              <div className="  bg-zinc-800 rounded-xl  h-4 w-20 animate-pulse" />
            </div>
          </div>
        </div>
      );
    case types.HORIZONTAL_CARD:
      return (
        <div className="cursor-pointer  flex gap-3  ">
          <div className="w-[40%] h-20 min-[400px]:h-24 min-[550px]:h-36 min-[1000px]:h-20 min-[1200px]:h-24 min-w-24  bg-zinc-800 animate-pulse rounded-lg" />
          <div className="flex flex-col flex-grow">
            <div className="h-4 bg-zinc-800 animate-pulse mb-2 rounded" />
            <div className="h-3 bg-zinc-800 animate-pulse mb-2 rounded" />
            <div className="h-2 bg-zinc-800 animate-pulse w-2/3 rounded" />
          </div>
        </div>
      );
  }
};

export default VideoSkeletonCard;
