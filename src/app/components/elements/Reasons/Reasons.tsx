import React, { FC, ReactElement } from "react";
import images from "../../../../public/images";
import { ReasonType } from "../../../types/Type";
import Reason from "../../modules/Reason/Reason";
import "./Reasons.scss";

const listReason: ReasonType[] = [
  {
    id: 1,
    imageUrl: images.reasonIcon1,
    title: "Best Services",
    desc: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    id: 2,
    imageUrl: images.reasonIcon1,
    title: "Best Teams",
    desc: "Cursus semper tellus volutpat aliquet lacus.",
  },
  {
    id: 3,
    imageUrl: images.reasonIcon2,
    title: "Best Designs",
    desc: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];

const Reasons: FC = (): ReactElement => {
  return (
    <section className="reasons">
      <div className="container">
        <h1 className="reasons-title">Our Reputation</h1>
        <div className="reasons-content">
          {listReason.map((item) => {
            return (
              <Reason
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
