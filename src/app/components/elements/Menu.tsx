import { FC, ReactElement } from "react";
import "app/styles/component/elements/Menu.scss";

const Menu: FC = (): ReactElement => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="o#" className="menu-link">
          Home
        </a>
      </li>
      <li className="menu-item">
        <a href="o#" className="menu-link">
          About Us
        </a>
      </li>
      <li className="menu-item">
        <a href="o#" className="menu-link">
          Projects
        </a>
      </li>
      <li className="menu-item">
        <a href="o#" className="menu-link">
          Services
        </a>
      </li>
      <li className="menu-item ">
        <a href="o#" className="menu-link active">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default Menu;
