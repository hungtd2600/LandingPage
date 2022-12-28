import { FC, ReactElement } from "react";
import "app/styles/component/modules/Footer.scss";

const Footer: FC = (): ReactElement => {
  return (
    <section className="footer">
      <div className="container">
        <p className="footer-content">
          TheBox Company © 2022. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
