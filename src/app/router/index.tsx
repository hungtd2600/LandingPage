import { createBrowserRouter } from "react-router-dom";

import ExamplePage from "app/pages/ExamplePage";
import LandingPage from "app/pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/examplepage",
    element: <ExamplePage />,
  },
]);

export default router;
