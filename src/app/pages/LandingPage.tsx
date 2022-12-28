import { FC, ReactElement } from "react";
import AboutUs from "app/components/modules/AboutUs";
import Bottom from "app/components/modules/Bottom";
import Footer from "app/components/modules/Footer";
import Hero from "app/components/modules/Hero";
import Navbar from "app/components/modules/Navbar";
import Reasons from "app/components/modules/Reasons";
import Services from "app/components/modules/Services";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <AboutUs />
      <Services />
      <Bottom />
      <Footer />
    </>
  );
};

export default LandingPage;
