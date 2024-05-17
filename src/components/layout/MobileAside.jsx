import Logo from "../UI/Logo";
import Overlay from "../Overlay";
import Aside from "./Aside";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const MobileAside = ({ setOffCanvas }) => {
  return (
    <Overlay setOffCanvas={setOffCanvas}>
      <motion.div
        initial={{ x: "-65%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="offcanvas relative w-[65%] min-[360px]:w-1/2 min-[660px]:w-1/3 min-[1200px]:w-[20%] bg-zinc-900 h-full pb-20"
      >
        <div className="pt-8 ps-4 pb-4">
          <FaXmark
            onClick={() => setOffCanvas(false)}
            className="absolute text-white text-2xl top-8 right-5 cursor-pointer"
          />
          <Logo isSideBar={true} />
        </div>

        <Aside  isSideBar={true} />
      </motion.div>
    </Overlay>
  );
};

export default MobileAside;
