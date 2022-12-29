import { FC, ReactElement } from "react";
import images from "public/images";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/Stats.scss";

const styleButton = {
  width: "176px",
  background: "#2947A9",
  color: "white",
  padding: "16px 39px",
};

type StatsBoxType = {
  id: number;
  boxNumber: number;
  desc: string;
};

type StatsBoxProps = {
  listStats: StatsBoxType[];
};

const Stats: FC<StatsBoxProps> = ({ listStats }): ReactElement => {
  const StatsBox: FC<StatsBoxType> = (props: StatsBoxType): ReactElement => {
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
