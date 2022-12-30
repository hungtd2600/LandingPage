import { FC, ReactElement } from "react";
import { projectList } from "app/const/project";
import { reasonList } from "app/const/reasons";
import { serviceList } from "app/const/services";
import { statList } from "app/const/stats";
import { menuList } from "app/const/menu";
import Footer from "app/components/modules/Footer";
import NavBar from "app/components/modules/NavBar";
import Reasons from "app/components/modules/Reasons";
import Services from "app/components/modules/Services";
import Stats from "app/components/modules/Stats";
import Project from "app/components/modules/Project";
import Button from "app/components/elements/Button";
import Input from "app/components/elements/Input";
import images from "public/images";
import "app/styles/component/pages/landing.scss";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <NavBar menuList={menuList} />
      <section id="home" className="hero">
        <img src={images.hero} alt="" />
      </section>
      <Reasons reasonList={reasonList} />
      <section id="aboutus" className="aboutus">
        <div className="container">
          <img className="aboutus-image" src={images.aboutUs} alt="" />
          <div className="aboutus-infor">
            <h2 className="infor-title">About us</h2>
            <p className="infor-desc">
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p className="infor-desc">
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <div className="infor-more">
              <Button className="button aboutus-button">
                More on Our History
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Services serviceList={serviceList} />
      <Stats statList={statList} />
      <section className="ads">
        <div className="container">
          <div className="ads-content">
            <h3 className="content-heading">
              Free consultation with exceptional quality
            </h3>
            <p className="content-desc">Just one call away: +84 1102 2703</p>
          </div>
          <Button className="button ads-button">Get your consultation</Button>
        </div>
      </section>
      <Project projectList={projectList} />
      <section className="cta" id="contactus">
        <div className="container">
          <div className="cta-heading">
            <h2 className="heading-title">What can us do for you?</h2>
            <p className="heading-desc">
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <div className="cta-content">
            <div className="content-form">
              <Input type="text" placeholder="Your Name*" />
              <Input type="text" placeholder="Email*" />
              <Input type="text" placeholder="Reason for Contacting*" />
              <Input type="text" placeholder="Phone" />
              <textarea className="content-textarea" placeholder="Messages" />
            </div>
            <p className="content-tutorial">
              <strong>*</strong> indicates a required field
            </p>
          </div>
          <div className="cta-final">
            <Button className="button cta-button ">Submit</Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
