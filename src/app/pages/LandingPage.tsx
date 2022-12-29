import { FC, ReactElement } from "react";
import { projectList } from "app/const/project";
import { reasonList } from "app/const/reasons";
import { serviceList } from "app/const/services";
import { statList } from "app/const/stats";
import { menuList } from "app/const/menu";
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
      <NavBar menuList={menuList} />
      <Hero />
      <Reasons reasonList={reasonList} />
      <AboutUs />
      <Services serviceList={serviceList} />
      <Stats statList={statList} />
      <Ads />
      <Project projectList={projectList} />
      <Cta />
      <Bottom />
      <Footer />
    </>
  );
};

export default LandingPage;
