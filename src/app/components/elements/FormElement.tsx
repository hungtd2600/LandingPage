import { FC, ReactElement } from "react";
import "app/styles/component/elements/FormElement.scss";

const FormElement: FC = (): ReactElement => {
  return <input className="form" type="text" placeholder="Your email here" />;
};

export default FormElement;
