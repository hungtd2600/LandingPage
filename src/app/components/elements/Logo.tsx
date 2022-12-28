import { FC, ReactElement } from "react";
import images from "public/images";
import "app/styles/component/elements/Logo.scss";

const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <img src={images.logo} alt="" />
      <p>TheBox</p>
    </div>
  );
};

export default Logo;
