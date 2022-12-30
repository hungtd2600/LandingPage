import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "app/styles/globalstyles";
import LandingPage from "app/pages/LandingPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <LandingPage />
    </GlobalStyles>
  </React.StrictMode>
);
