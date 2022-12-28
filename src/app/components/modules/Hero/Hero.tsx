import images from "public/images";
import { FC, ReactElement } from "react";
import "app/components/modules/Hero/Hero.scss";

const Hero: FC = (): ReactElement => {
  return (
    <section className="hero">
      <img src={images.hero} alt="" />
    </section>
  );
};

export default Hero;
