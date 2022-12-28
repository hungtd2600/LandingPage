import { FC, ReactElement } from "react";
import "app/styles/component/elements/Stats.scss";
import images from "public/images";
import Button from "../elements/Button";
import { listStats } from "app/const/stats";
import StatsBox from "../elements/StatsBox";

const styleButton = {
  width: "176px",
  background: "#2947A9",
  color: "white",
  padding: "16px 39px",
};

const Stats: FC = (): ReactElement => {
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
            {listStats.map((item) => {
              return (
                <div key={item.id} className="box-item">
                  <StatsBox
                    id={item.id}
                    boxNumber={item.boxNumber}
                    desc={item.desc}
                  />
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
          <Button title="Contact Us" style={styleButton} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
