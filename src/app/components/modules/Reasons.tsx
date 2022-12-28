import { FC, ReactElement } from "react";
import { listReason } from "app/const/reasons";
import ReasonBox from "app/components/elements/ReasonBox";
import "app/styles/component/modules/Reasons.scss";

const Reasons: FC = (): ReactElement => {
  return (
    <section className="reasons">
      <div className="container">
        <h1 className="reasons-title">Our Reputation</h1>
        <div className="reasons-content">
          {listReason.map((item) => {
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
