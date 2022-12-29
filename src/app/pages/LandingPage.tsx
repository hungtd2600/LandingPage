import { FC, ReactElement } from "react";
import { listSProject } from "app/const/project";
import { listReasons } from "app/const/reasons";
import { listServices } from "app/const/services";
import { listStats } from "app/const/stats";
import { listMenuItem } from "app/const/menu";
import AboutUs from "app/components/modules/AboutUs";
import Bottom from "app/components/modules/Bottom";
import Footer from "app/components/modules/Footer";
import Hero from "app/components/modules/Hero";
import NavBar from "app/components/modules/NavBar";
import Reasons from "app/components/modules/Reasons";
import Services from "app/components/modules/Services";
import Stats from "app/components/modules/Stats";
import Ads from "app/components/modules/Ads";
import Project from "app/components/modules/Project";
import Cta from "app/components/modules/Cta";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <NavBar listMenuItem={listMenuItem} />
      <Hero />
      <Reasons listReasons={listReasons} />
      <AboutUs />
      <Services listServices={listServices} />
      <Stats listStats={listStats} />
      <Ads />
      <Project listSProject={listSProject} />
      <Cta />
      <Bottom />
      <Footer />
    </>
  );
};

export default LandingPage;
