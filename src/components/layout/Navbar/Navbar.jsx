import Search from "./Search.jsx";
import Profile from "./Profile.jsx";
import NavLeftSection from "./NavLeftSection.jsx";
const Navbar = ({ setOffCanvas }) => {
  return (
    <nav className="text-white h-16  text-xl flex-between ">
      <NavLeftSection setOffCanvas={setOffCanvas} />
      <Search />
      <Profile />
    </nav>
  );
};

export default Navbar;
