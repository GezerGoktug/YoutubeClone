import Navbar from "../components/layout/Navbar/Navbar";
import Aside from "../components/layout/Aside";
import { Outlet, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { Fragment, useEffect, useState } from "react";
import MobileAside from "../components/layout/MobileAside";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const { pathname } = useLocation();

  //! Offcanvası(Mobile aside) kontrol eden state
  const [offcanvas, setOffCanvas] = useState(false);

  //! Eğer soldan sidebar da linke tıklanırsa kapat.
  useEffect(() => {
    setOffCanvas(false)
  }, [pathname])
  
  return (
    <Fragment>
      <AnimatePresence>
        {offcanvas && <MobileAside setOffCanvas={setOffCanvas} />}
      </AnimatePresence>
      <Container>
        <Navbar setOffCanvas={setOffCanvas} />
        <div className="grid grid-cols-12 min-[1200px]:grid-cols-6  ">
          {/* Detay sayfasında aside barı gösterme */}
          {!pathname.includes("/detail/") && <Aside />}

          <Outlet />
        </div>
      </Container>
    </Fragment>
  );
};

export default Layout;
