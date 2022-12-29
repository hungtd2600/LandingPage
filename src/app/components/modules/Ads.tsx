import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/ads.scss";

const Ads: FC = (): ReactElement => {
  return (
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
  );
};

export default Ads;
