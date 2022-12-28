import AboutUs from "app/components/modules/AboutUs/AboutUs";
import Footer from "app/components/modules/Footer/Footer";
import Hero from "app/components/modules/Hero/Hero";
import Navbar from "app/components/modules/Navbar/Navbar";
import Reasons from "app/components/modules/Reasons/Reasons";
import Services from "app/components/modules/Services/Services";
import { FC, ReactElement } from "react";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;
