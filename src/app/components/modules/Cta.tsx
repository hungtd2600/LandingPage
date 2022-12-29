import { FC, ReactElement } from "react";
import Input from "app/components/elements/Input";
import Button from "app/components/elements/Button";
import "app/styles/component/modules/cta.scss";

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
  );
};

export default Cta;
