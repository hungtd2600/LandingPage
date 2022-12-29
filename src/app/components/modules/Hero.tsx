import { FC, ReactElement } from "react";
import images from "public/images";
import "app/styles/component/modules/hero.scss";

const Hero: FC = (): ReactElement => {
  return (
    <section className="hero">
      <img src={images.hero} alt="" />
    </section>
  );
};

export default Hero;
