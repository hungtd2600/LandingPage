import { FC, ReactElement } from "react";
import "app/styles/component/elements/StatsBox.scss";

export type StatsBoxProps = {
  id: number;
  boxNumber: number;
  desc: string;
};

const StatsBox: FC<StatsBoxProps> = (props: StatsBoxProps): ReactElement => {
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

export default StatsBox;
