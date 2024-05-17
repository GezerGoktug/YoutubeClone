import { Tooltip } from "flowbite-react";
import { icons } from "../../../constants/icons";

const Profile = () => {
  return (
    <div className="flex items-center gap-4 text-xl min-[768px]:text-2xl">
      <Tooltip content="Create" placement="bottom">
        <button
          className="hidden min-[450px]:block p-1 min-[768px]:p-3 transition-colors hover:bg-zinc-800 rounded-full"
          href="#"
        >
          {icons.navbar.video}
        </button>
      </Tooltip>
      <Tooltip content="Notifications" placement="bottom">
        <button
          className="hidden min-[450px]:block p-1  min-[768px]:p-3 transition-colors hover:bg-zinc-800 rounded-full"
          href="#"
        >
          {icons.navbar.notifications}
        </button>
      </Tooltip>
      <a href="#">
        <img
          className="w-[40px] h-8 min-[390px]:w-auto min-[450px]:h-6 min-[768px]:h-9 rounded-full"
          src="/img/avatar1.png"
          alt="avatar"
        />
      </a>
    </div>
  );
};

export default Profile;
