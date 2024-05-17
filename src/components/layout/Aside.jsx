import { icons } from "../../constants/icons";
import Links from "../UI/Links";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Aside = ({ isSideBar }) => {
  const { category } = useParams();
  const [categories, setCategories] = useState("home");

  //! Aside bardaki categori sekmelerinin aktiflik durumu ayarlaması
  //! URL parametresinde category bilgisine göre ayarlanıyor. 
  useEffect(() => {
    if (category) setCategories(category);
    else setCategories("home");
  }, [category]);

  return (
    <aside
      style={isSideBar ? null : { maxHeight: "calc(100vh - 64px)" }}
      className={`overflow-y-auto ${isSideBar && "max-h-full"} ${
        !isSideBar && "hidden"
      } min-[970px]:flex xl:pe-4 text-white py-3 flex-col`}
    >
      {icons.main.map((icon, i) => (
        <Links
          active={icon.label.toLowerCase() === categories}
          isSideBar={isSideBar}
          key={i}
        >
          {icon.icon}
          <span>{icon.label}</span>
        </Links>
      ))}
      <div></div>
      <h4
        className={`text-lg ${
          !isSideBar && "hidden"
        } min-[1200px]:block  border-y font-bold ps-3 my-2 border-zinc-700 py-3`}
      >
        You
      </h4>
      <div className={`${!isSideBar && "hidden"} min-[1200px]:block`}>
        {icons.personal.map((icon, i) => (
          <Links isSideBar={isSideBar} key={i}>
            {icon.icon}
            <span>{icon.label}</span>
          </Links>
        ))}
      </div>
      <h4
        className={`text-lg ${
          !isSideBar && "hidden"
        } min-[1200px]:block border-y font-bold ps-3 my-2 border-zinc-700 py-3`}
      >
        Explore
      </h4>
      <div className={`${!isSideBar && "hidden"} min-[1200px]:block`}>
        {icons.explore.map((icon, i) => (
          <Links
            to={
              icon.isTherePages ? `/category/${icon.label.toLowerCase()}` : null
            }
            active={icon.label.toLowerCase() === categories}
            isSideBar={isSideBar}
            key={i}
          >
            {icon.icon}
            <span className="truncate">{icon.label}</span>
          </Links>
        ))}
      </div>

      <span
        className={`${
          !isSideBar && "hidden"
        } min-[1200px]:block border border-zinc-700 my-2`}
      ></span>

      <div className={`${!isSideBar && "hidden"} min-[1200px]:block`}>
        {icons.settings.map((icon, i) => (
          <Links isSideBar={isSideBar} key={i}>
            {icon.icon}
            <span>{icon.label}</span>
          </Links>
        ))}
      </div>

      <span
        className={`${
          !isSideBar && "hidden"
        } min-[1200px]:block border border-zinc-700 my-2`}
      ></span>

      <div
        className={`${
          !isSideBar ? "hidden" : "flex ps-2"
        } gap-3 min-[1200px]:flex text-zinc-400 py-2 font-semibold text-sm flex-wrap`}
      >
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Copyright</a>
        <a href="#">Contact us</a>
        <a href="#">Creator</a>
        <a href="#">Advertise</a>
        <a href="#">Developers</a>
      </div>

      <div
        className={`${
          !isSideBar ? "hidden" : "flex ps-2"
        } gap-3 min-[1200px]:flex text-zinc-400 pt-6 pb-2 font-semibold text-sm flex-wrap`}
      >
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Policy & Safety</a>
        <a href="#">How Youtube works</a>
        <a href="#">Test new features</a>
      </div>

      <div
        className={`${
          !isSideBar ? "hidden" : "ps-2"
        } text-[12px] min-[1200px]:block my-3 text-zinc-500`}
      >
        &copy; 2024 Google LLC
      </div>
    </aside>
  );
};

export default Aside;
