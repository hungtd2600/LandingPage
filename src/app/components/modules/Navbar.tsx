import { FC, ReactElement } from "react";
import Logo from "../elements/Logo";
import "app/styles/component/modules/Navbar.scss";

const Navbar: FC = (): ReactElement => {
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

  return (
    <section className="navbar">
      <div className="container">
        <Logo />
        <Menu />
      </div>
    </section>
  );
};

export default Navbar;
