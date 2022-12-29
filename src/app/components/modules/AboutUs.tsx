import { FC, ReactElement } from "react";
import images from "public/images";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/aboutUs.scss";

const AboutUs: FC = (): ReactElement => {
  return (
    <section className="aboutus">
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
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <div className="infor-more">
            <Button className="button aboutus-button">
              More on Our History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
