import { FC, ReactElement } from "react";
import "app/styles/component/elements/ReasonBox.scss";

export type ReasonBoxProps = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

const ReasonBox: FC<ReasonBoxProps> = (props: ReasonBoxProps): ReactElement => {
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

export default ReasonBox;
