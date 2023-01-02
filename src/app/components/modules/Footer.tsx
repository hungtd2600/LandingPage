import { FC, ReactElement } from "react";

import Logo from "app/components/elements/Logo";
import Button from "app/components/elements/Button";

import images from "assets/images";
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
    <section className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="footer-contact">
            <div className="contact-address">
              <span className="item-title">Address:</span>
              <span className="item-content">
                6391 Elgin St. Celina, Delaware 1029
              </span>
            </div>
            <div className="contact-phone">
              <span className="item-title">Phone:</span>
              <a href="tel: +84 1102 2703" className="item-content">
                +84 1102 2703
              </a>
            </div>
            <div className="contact-email">
              <span className="item-title">Email:</span>
              <span className="item-content">hello@thebox.com</span>
            </div>
          </div>
          <div className="footer-logo">
            <Logo />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-news">
            <h5 className="news-title">Newsletter:</h5>
            <div className="new-content">
              <input type="text" placeholder="Your email here" />
              <Button className="button new-button">Subscribe</Button>
            </div>
          </div>
          <div className="footer-social">
            <h5 className="social-title">Social:</h5>
            <SocialGroup />
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="container">
          <p>TheBox Company © 2022. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
