import { FC, ReactElement } from "react";
import images from "public/images";
import "app/styles/component/elements/SocialGroup.scss";

const SocialGroup: FC = (): ReactElement => {
  return (
    <div className="social">
      <img src={images.facebook} alt="" className="social-item" />
      <img src={images.linked} alt="" className="social-item" />
      <img src={images.twitter} alt="" className="social-item" />
    </div>
  );
};

export default SocialGroup;
