import { FC, ReactElement } from "react";

import images from "assets/images";
import "app/styles/component/elements/logo.scss";

const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <a href="/">
        <img src={images.logo} alt="" />
        <p>TheBox</p>
      </a>
    </div>
  );
};

export default Logo;
