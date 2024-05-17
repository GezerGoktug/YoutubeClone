import ReactDOM from "react-dom";

const Backdrop = ({ children, setOffCanvas }) => {
  const handleOffCanvas = (e) => {
    if (e.target.classList.contains("backdrop")) setOffCanvas(false);
  };
  return (
    <div
      onClick={handleOffCanvas}
      className="backdrop w-full z-50 h-screen fixed top-0 left-0 bg-black/50 "
    >
      {children}
    </div>
  );
};

const Overlay = ({ children, setOffCanvas }) => {
  const overlay = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop setOffCanvas={setOffCanvas}>{children}</Backdrop>
        </>,
        overlay
      )}
    </>
  );
};

export default Overlay;
