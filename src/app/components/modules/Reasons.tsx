import { FC, ReactElement } from "react";
import images from "public/images";
import "app/styles/component/modules/reasons.scss";

type ReasonType = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ReasonProps = {
  reasonList: ReasonType[];
};

const Reasons: FC<ReasonProps> = ({ reasonList }): ReactElement => {
  const ReasonBox = (props: ReasonType): ReactElement => {
    return (
      <div key={props.id} className="reason">
        <div className="reason-icon">
          <img src={props.imageUrl} alt="" />
        </div>
        <h2 className="reason-title">{props.title}</h2>
        <p className="reason-desc">{props.desc}</p>
      </div>
    );
  };
  return (
    <>
      <section className="hero">
        <img src={images.hero} alt="" />
      </section>
      <section className="reasons">
        <div className="container">
          <h1 className="reasons-title">Our Reputation</h1>
          <div className="reasons-content">
            {reasonList.map((item) => {
              return (
                <ReasonBox
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
    </>
  );
};

export default Reasons;
