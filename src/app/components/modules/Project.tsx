import { FC, ReactElement } from "react";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/Project.scss";

const styleButton = {
  color: "white",
  background: "#292E3D",
  padding: "21px 108px",
  width: "295px",
  fontWeight: "400",
  display: "flex",
};

type ProjectBoxType = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ProjectBoxProps = {
  listSProject: ProjectBoxType[];
};

const Project: FC<ProjectBoxProps> = ({ listSProject }): ReactElement => {
  const ProjectBox: FC<ProjectBoxType> = (
    props: ProjectBoxType
  ): ReactElement => {
    return (
      <div key={props.id} className="project-item">
        <img src={props.imageUrl} alt="" className="item-image" />
        <h3 className="item-title">{props.title}</h3>
        <span className="item-desc">{props.desc}</span>
      </div>
    );
  };

  return (
    <section className="project">
      <div className="container">
        <h2 className="project-title">Projects</h2>
        <div className="project-content">
          <ul className="menu">
            <li className="menu-item">
              <div className="menu-fill active-fill"></div>
              <a href="#a" className="menu-link active-link">
                All
              </a>
            </li>
            <li className="menu-item">
              <div className="menu-fill"></div>
              <a href="#a" className="menu-link">
                Commercial
              </a>
            </li>
            <li className="menu-item">
              <div className="menu-fill"></div>
              <a href="#a" className="menu-link">
                Residential
              </a>
            </li>
            <li className="menu-item">
              <div className="menu-fill"></div>
              <a href="#a" className="menu-link">
                Other
              </a>
            </li>
          </ul>
          <div className="project-group">
            {listSProject.map((item) => {
              return (
                <ProjectBox
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
            <div className="project-navigate">
              <Button title="Back" style={styleButton} />
              <div className="navigate-control">
                <div className="control-item active-fill "></div>
                <div className="control-item"></div>
                <div className="control-item"></div>
                <div className="control-item"></div>
                <div className="control-item"></div>
              </div>
              <Button title="Next" style={styleButton} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
