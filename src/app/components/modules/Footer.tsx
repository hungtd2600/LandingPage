import { FC, ReactElement } from "react";
import Input from "app/components/elements/Input";
import Logo from "app/components/elements/Logo";
import Button from "app/components/elements/Button";
import images from "public/images";

import "app/styles/component/modules/footer.scss";

const Footer: FC = (): ReactElement => {
  const SocialGroup: FC = (): ReactElement => {
    return (
      <div className="social">
        <img src={images.facebook} alt="" className="social-item" />
        <img src={images.linked} alt="" className="social-item" />
        <img src={images.twitter} alt="" className="social-item" />
      </div>
    );
  };
  return (
    <>
      <section className="bottom">
        <div className="container">
          <div className="bottom-left">
            <div className="bottom-contact">
              <div className="contact-address">
                <span className="item-title">Address:</span>
                <span className="item-content">
                  6391 Elgin St. Celina, Delaware 1029
                </span>
              </div>
              <div className="contact-phone">
                <span className="item-title">Phone:</span>
                <span className="item-content">+84 1102 2703</span>
              </div>
              <div className="contact-email">
                <span className="item-title">Email:</span>
                <span className="item-content">hello@thebox.com</span>
              </div>
            </div>
            <div className="bottom-logo">
              <Logo />
            </div>
          </div>
          <div className="bottom-right">
            <div className="bottom-news">
              <h5 className="news-title">Newsletter:</h5>
              <div className="new-content">
                <Input placeholder="Your email here" />
                <Button className="button new-button">Subscribe</Button>
              </div>
            </div>
            <div className="bottom-social">
              <h5 className="social-title">Social:</h5>
              <SocialGroup />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <p className="footer-content">
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
