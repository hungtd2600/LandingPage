import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import GlobalStyles from "app/styles/globalstyles";
import router from "app/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <RouterProvider router={router} />;
    </GlobalStyles>
  </React.StrictMode>
);
