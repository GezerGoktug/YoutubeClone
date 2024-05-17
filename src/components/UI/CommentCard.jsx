
import { icons } from "../../constants/icons";
import { MdKeyboardArrowDown } from "react-icons/md";

const CommentCard = ({ comment }) => {
  const {
    authorThumbnail,
    authorText,
    likesCount,
    publishedTimeText,
    textDisplay,
    replyCount,
    isVerified,
  } = comment;
  return (
    <div className="flex gap-4 items-start">
      <img
        className="h-12 min-w-12 bg-zinc-700 rounded-full"
        src={authorThumbnail[0].url}
        alt={authorText}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-x-4 gap-y-1  flex-wrap ">
          <h4 className="font-bold flex gap-2 items-center">
            {authorText} {isVerified ? icons.other.verified : null}
          </h4>
          <span className="text-zinc-500">{publishedTimeText}</span>
        </div>
        <p>
          {textDisplay.split("\n").map((text, i) => (
            <span key={i}>
              {text} <br />
            </span>
          ))}
        </p>
        <div>
          <div className="flex  gap-4 ">
            <button className="   flex items-center gap-2 mt-1  ">
              {icons.personal[5].icon} {likesCount}{" "}
            </button>
            <button className="gap-2   flex items-center">
              {icons.other.dislike} 0
            </button>
          </div>
          {+replyCount !== 0 && (
            <div className="flex items-center gap-1 text-blue-500 cursor-pointer w-max font-medium mt-3">
              <MdKeyboardArrowDown className="text-3xl" />
              <span>{replyCount} reply </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
