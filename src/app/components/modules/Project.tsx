import { FC, ReactElement } from "react";
import images from "public/images";
import Button from "app/components/elements/Button";
import Input from "app/components/elements/Input";
import "app/styles/component/modules/project.scss";

type ProjectType = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ProjectProps = {
  projectList: ProjectType[];
};

const Project: FC<ProjectProps> = ({ projectList }): ReactElement => {
  const ProjectBox = (props: ProjectType): ReactElement => {
    return (
      <div key={props.id} className="project-item">
        <img src={props.imageUrl} alt="" className="item-image" />
        <h3 className="item-title">{props.title}</h3>
        <span className="item-desc">{props.desc}</span>
      </div>
    );
  };

  return (
    <>
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
              {projectList.map((item) => {
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
                <Button className="button navigate-button">
                  <img src={images.arrowBack} alt="" />
                  Back
                </Button>
                <div className="navigate-control">
                  <div className="control-item active-fill " />
                  <div className="control-item" />
                  <div className="control-item" />
                  <div className="control-item" />
                  <div className="control-item" />
                </div>
                <Button className="button navigate-button">
                  Next <img src={images.arrowNext} alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <div className="cta-heading">
            <h2 className="heading-title">What can us do for you?</h2>
            <p className="heading-desc">
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <div className="cta-content">
            <div className="content-form">
              <Input type="text" placeholder="Your Name*" />
              <Input type="text" placeholder="Email*" />
              <Input type="text" placeholder="Reason for Contacting*" />
              <Input type="text" placeholder="Phone" />
              <textarea className="content-textarea" placeholder="Messages" />
            </div>
            <p className="content-tutorial">
              <strong>*</strong> indicates a required field
            </p>
          </div>
          <div className="cta-final">
            <Button className="button cta-button ">Submit</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
