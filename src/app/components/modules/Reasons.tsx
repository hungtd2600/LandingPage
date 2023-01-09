import { FC, ReactElement } from "react";

import "app/styles/component/modules/reasons.scss";

type TReason = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ReasonProps = {
  reasonList: TReason[];
};

const Reasons: FC<ReasonProps> = ({ reasonList }): ReactElement => {
  const ReasonBox = (props: TReason): ReactElement => {
    return (
      <div className="reason">
        <div className="reason-icon">
          <img src={props.imageUrl} alt="" />
        </div>
        <h2 className="reason-title">{props.title}</h2>
        <p className="reason-desc">{props.desc}</p>
      </div>
    );
  };
  return (
    <section className="reasons">
      <div className="container">
        <h1 className="reasons-title">Our Reputation</h1>
        <div className="reasons-content">
          {reasonList.map((item) => {
            return <ReasonBox key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
