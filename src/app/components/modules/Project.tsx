import { FC, ReactElement } from "react";
import { listSProject } from "app/const/project";
import Button from "../elements/Button";
import ProjectBox from "../elements/ProjectBox";
import "app/styles/component/modules/Project.scss";

const styleButton = {
  color: "white",
  background: "#292E3D",
  padding: "21px 108px",
  width: "295px",
  fontWeight: "400",
};

const Project: FC = (): ReactElement => {
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
