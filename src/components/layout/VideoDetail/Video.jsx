import ReactPlayer from "react-player";

const Video = ({ url }) => {
  return (
    <div className="h-[250px] min-[450px]:h-[350px] min-[550px]:h-[450px] min-[1000px]:h-[350px] min-[1200px]:h-[450px]">
      <ReactPlayer url={url} controls height="100%" width="100%" />
    </div>
  );
};

export default Video;
