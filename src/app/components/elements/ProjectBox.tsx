import { FC, ReactElement } from "react";
import "app/styles/component/elements/ProjectBox.scss";

export type ProjectBoxProps = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

const ProjectBox: FC<ProjectBoxProps> = (
  props: ProjectBoxProps
): ReactElement => {
  return (
    <div key={props.id} className="project-item">
      <img src={props.imageUrl} alt="" className="item-image" />
      <h3 className="item-title">{props.title}</h3>
      <span className="item-desc">{props.desc}</span>
    </div>
  );
};

export default ProjectBox;
