import { RouterProvider } from "react-router-dom";
import { router } from "./routers/route";

function App() {
  return (
    <div className="h-screen  bg-stone-950">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
