import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/Ads.scss";

const styleButton = {
  color: "white",
  background: "unset",
  padding: "16px 20px",
  border: "2px solid #FFFFFF",
  borderRadius: "2px",
};

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
        <Button title="Get your consultation" style={styleButton} />
      </div>
    </section>
  );
};

export default Ads;
