import { FC, ReactElement } from "react";
import "app/styles/component/modules/Reasons.scss";

type ReasonBoxType = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ReasonBoxProps = {
  listReasons: ReasonBoxType[];
};

const Reasons: FC<ReasonBoxProps> = ({ listReasons }): ReactElement => {
  const ReasonBox: FC<ReasonBoxType> = (props: ReasonBoxType): ReactElement => {
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
    <section className="reasons">
      <div className="container">
        <h1 className="reasons-title">Our Reputation</h1>
        <div className="reasons-content">
          {listReasons.map((item) => {
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
  );
};

export default Reasons;
