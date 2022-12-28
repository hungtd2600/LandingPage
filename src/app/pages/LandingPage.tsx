import { FC, ReactElement } from "react";
import AboutUs from "app/components/modules/AboutUs";
import Bottom from "app/components/modules/Bottom";
import Footer from "app/components/modules/Footer";
import Hero from "app/components/modules/Hero";
import Navbar from "app/components/modules/Navbar";
import Reasons from "app/components/modules/Reasons";
import Services from "app/components/modules/Services";
import Stats from "app/components/modules/Stats";
import Ads from "app/components/modules/Ads";
import Project from "app/components/modules/Project";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <AboutUs />
      <Services />
      <Stats />
      <Ads />
      <Project />
      <Bottom />
      <Footer />
    </>
  );
};

export default LandingPage;
