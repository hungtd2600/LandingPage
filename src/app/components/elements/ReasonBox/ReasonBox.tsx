import { FC, ReactElement } from "react";
import { ReasonType } from "app/types/Type";
import "app/components/elements/ReasonBox/ReasonBox.scss";

const ReasonBox: FC<ReasonType> = (reason): ReactElement => {
  return (
    <div key={reason.id} className="reason">
      <div className="reason-icon">
        <img src={reason.imageUrl} alt="" />
      </div>
      <h2 className="reason-title">{reason.title}</h2>
      <p className="reason-desc">{reason.desc}</p>
    </div>
  );
};

export default ReasonBox;
