import { FC, ReactElement } from "react";

import images from "assets/images";
import Button from "app/components/elements/Button";

import "app/styles/component/modules/stats.scss";

type TStats = {
  id: number;
  boxNumber: number;
  desc: string;
};

type StatsProps = {
  statList: TStats[];
};

const Stats: FC<StatsProps> = ({ statList }): ReactElement => {
  const StatsBox = (props: TStats): ReactElement => {
    return (
      <>
        <h4 className="box-number">{props.boxNumber}</h4>
        <div className="box-desc">
          <span className="desc-fill"></span>
          <span className="desc-content">{props.desc}</span>
        </div>
      </>
    );
  };

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-achievement">
          <div className="achievement-icon">
            <img src={images.stastIcon1} alt="" className="icon-item" />
            <img src={images.stastIcon2} alt="" className="icon-item" />
            <img src={images.stastIcon3} alt="" className="icon-item" />
            <img src={images.stastIcon4} alt="" className="icon-item" />
          </div>
          <div className="achievement-box">
            {statList.map((item) => {
              return (
                <div key={item.id} className="box-item">
                  <StatsBox {...item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="stats-introduce">
          <h3 className="introduce-title">30 Years Experience</h3>
          <p className="introduce-content">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <Button className="button introduce-button">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
