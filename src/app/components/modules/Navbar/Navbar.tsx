import { FC, ReactElement } from "react";
import Menu from "app/components/elements/Menu/Menu";
import Logo from "app/components/elements/Logo/Logo";
import "app/components/modules/Navbar/Navbar.scss";

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
