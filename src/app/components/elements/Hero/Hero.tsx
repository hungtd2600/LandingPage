import React, { FC } from "react";
import images from "../../../../public/images";
import "./Hero.scss";

const Hero: FC = () => {
  return (
    <section className="hero">
      <img src={images.hero} alt="" />
    </section>
  );
};

export default Hero;
