import { FC, ReactElement } from "react";
import FormElement from "app/components/elements/FormElement";
import ButtonSecondary from "app/components/elements/ButtonSecondary";
import SocialGroup from "app/components/elements/SocialGroup";
import Logo from "../elements/Logo";
import "app/styles/component/modules/Bottom.scss";

const Bottom: FC = (): ReactElement => {
  return (
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
              <FormElement />
              <ButtonSecondary />
            </div>
          </div>
          <div className="bottom-social">
            <h5 className="social-title">Social:</h5>
            <SocialGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
