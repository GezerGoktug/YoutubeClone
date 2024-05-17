import { Link } from "react-router-dom";

const Links = ({ children, isSideBar, active, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={` px-3 py-2 font-medium text-[12px] min-[1200px]:text-lg rounded-xl ${
        active ? "bg-zinc-800" : ""
      } hover:bg-zinc-800 cursor-pointer flex  ${
        !isSideBar ? "flex-col" : "flex-row "
      } min-[1200px]:flex-row gap-4  items-center`}
    >
      {children}
    </Link>
  );
};

export default Links;
