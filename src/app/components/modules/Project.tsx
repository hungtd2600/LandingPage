import { FC, ReactElement, useState } from "react";

import Button from "app/components/elements/Button";

import images from "assets/images";
import "app/styles/component/modules/project.scss";

type TProject = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type TMenuItem = {
  id: number;
  name: string;
  link: string;
};

type ProjectProps = {
  projectList: TProject[];
  menuProjectList: TMenuItem[];
};

const Project: FC<ProjectProps> = ({
  projectList,
  menuProjectList,
}): ReactElement => {
  const [idActive, setIdActive] = useState(1);
  const [value, setValue] = useState(1);

  const handleClick = (type: string) => {
    if (type === "next") {
      value === 5 ? setValue(1) : setValue(value + 1);
    } else value === 1 ? setValue(5) : setValue(value - 1);
  };
  return (
    <section id="project" className="project">
      <div className="container">
        <h2 className="project-title">Projects</h2>
        <div className="project-content">
          <ul className="menu">
            {menuProjectList.map(({ id, name, link }) => {
              return (
                <li key={id} className="menu-item">
                  <div
                    className={`menu-fill ${
                      id === idActive ? "active-fill" : ""
                    }`}
                  ></div>
                  <a
                    href={link}
                    className={`menu-link ${
                      id === idActive ? "active-link" : ""
                    }`}
                    onClick={() => {
                      setIdActive(id);
                    }}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="project-group">
            {projectList.map(({ imageUrl, title, desc, id }) => {
              return (
                <div key={id} className="project-item">
                  <img src={imageUrl} alt="" className="item-image" />
                  <h3 className="item-name">{title}</h3>
                  <span className="item-desc">{desc}</span>
                </div>
              );
            })}
            <div className="project-navigate">
              <Button
                onClick={() => handleClick("back")}
                className="button navigate-button"
              >
                <img src={images.arrowBack} alt="" />
                Back
              </Button>
              <div className="navigate-control">
                <input
                  checked={value === 1}
                  value={value}
                  className="control-item"
                  type="radio"
                  onChange={(e) => e.target.value}
                />
                <input
                  checked={value === 2}
                  value={value}
                  className="control-item"
                  type="radio"
                  onChange={(e) => e.target.value}
                />
                <input
                  checked={value === 3}
                  value={value}
                  className="control-item"
                  type="radio"
                  onChange={(e) => e.target.value}
                />
                <input
                  checked={value === 4}
                  value={value}
                  className="control-item"
                  type="radio"
                  onChange={(e) => e.target.value}
                />
                <input
                  checked={value === 5}
                  value={value}
                  className="control-item"
                  type="radio"
                  onChange={(e) => e.target.value}
                />
              </div>
              <Button
                onClick={() => handleClick("next")}
                className="button navigate-button"
              >
                Next <img src={images.arrowNext} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
