import React from "react";
import AboutUs from "./app/components/elements/AboutUs/AboutUs";
import Footer from "./app/components/elements/Footer/Footer";
import Hero from "./app/components/elements/Hero/Hero";
import Navbar from "./app/components/elements/Navbar/Navbar";
import Reasons from "./app/components/elements/Reasons/Reasons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reasons />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
