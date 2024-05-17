import { Tooltip } from "flowbite-react";
import { icons } from "../../../constants/icons.jsx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [isFocus, setFocus] = useState(false);
  const [text, setText] = useState("");

  //! İnputu sıfırlar.
  const resetInput = () => setText("");
  const searchHandle = () => {
    //! Eğer input boş değilse
    if (text.trim() !== "") {
      navigate(`/search/${text}`);
      resetInput();
    }
  };

  return (
    <div className="flex  gap-2 min-[970px]:gap-6 text-sm min-[768px]:text-base  items-center w-3/4 min-[450px]:w-1/2">
      <div className=" flex items-center rounded-full border border-zinc-700   w-full">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Search"
          className="px-2 min-[450px]:px-4 py-1 min-[768px]:py-2  border-0 border-red-300 rounded-full outline-0 bg-transparent w-full"
          type="text"
        />
        <FaXmark
          onClick={resetInput}
          className={`${!isFocus && "opacity-0  "}  cursor-pointer me-3 `}
        />

        <Tooltip content="Search" placement="bottom">
          <div
            onClick={searchHandle}
            className="px-2 min-[450px]:px-4 min-[768px]:px-6 cursor-pointer rounded-r-full h-full py-1 min-[768px]:py-2 border-4 border-s border-s-zinc-700 border-zinc-800 bg-zinc-800"
          >
            {icons.navbar.search}
          </div>
        </Tooltip>
      </div>
      <Tooltip content="Search by voice" placement="bottom">
        <div className="p-2 min-[768px]:p-3  cursor-pointer transition-colors hover:bg-zinc-700 bg-zinc-800 rounded-full">
          {icons.navbar.microphone}
        </div>
      </Tooltip>
    </div>
  );
};

export default Search;
