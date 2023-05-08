import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import Error from "./routes/Error.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wtmf from "./routes/Wtmf.tsx";
import Root from "./routes/Root.tsx";
import Strata from "./routes/Strata.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/strata",
        element: <Strata />,
      },
      {
        path: "/wtmf",
        element: <Wtmf />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
