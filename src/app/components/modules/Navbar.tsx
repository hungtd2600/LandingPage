import { FC, ReactElement } from "react";
import Menu from "app/components/elements/Menu";
import Logo from "../elements/Logo";
import "app/styles/component/modules/Navbar.scss";

const Navbar: FC = (): ReactElement => {
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
