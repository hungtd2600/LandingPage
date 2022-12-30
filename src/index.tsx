import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "app/styles/globalstyles";
import Landing from "app/pages/Landing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Landing />
    </GlobalStyles>
  </React.StrictMode>
);
