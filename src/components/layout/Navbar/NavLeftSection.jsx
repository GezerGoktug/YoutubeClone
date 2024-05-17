import { Link } from "react-router-dom";
import { icons } from "../../../constants/icons";
import Logo from "../../UI/Logo";

const NavLeftSection = ({ setOffCanvas }) => {
  return (
    <div className="flex items-center gap-4 ">
      <span
        onClick={() => setOffCanvas(true)}
        className="transition-colors hover:bg-zinc-800  text-base min-[768px]:text-lg  p-1 min-[768px]:p-3 rounded-full cursor-pointer"
      >
        {icons.navbar.menu}
      </span>
      <Link>
        <Logo />
      </Link>
    </div>
  );
};

export default NavLeftSection;
