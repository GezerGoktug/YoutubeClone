import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white text-center h-full flex-center flex-col ">
      <div className="text-[120px] font-extrabold">404</div>
      <div className="text-[40px] font-bold ">Not Founded</div>
      <p className="text-[25px] font-semibold">Sorry. Something went wrong.</p>
      <button
        className="bg-zinc-800 p-3 rounded-lg font-semibold mt-4"
        onClick={() => navigate(-1)}
      >
        Return to previous page
      </button>
    </div>
  );
};

export default ErrorPage;
