import { FC, ReactElement } from "react";
import Input from "app/components/elements/Input";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/Cta.scss";

const styleButton = {
  width: "271px",
  background: "#2947A9",
  color: "white",
  padding: "16px auto",
  height: "53px",
};

const Cta: FC = (): ReactElement => {
  return (
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
            <Input placeholder="Your Name*" />
            <Input placeholder="Email*" />
            <Input placeholder="Reason for Contacting*" />
            <Input placeholder="Phone" />
            <textarea className="content-textarea" placeholder="Messages" />
          </div>
          <p className="content-tutorial">
            <strong>*</strong> indicates a required field
          </p>
        </div>
        <div className="cta-final">
          <Button title="Submit" style={styleButton} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
