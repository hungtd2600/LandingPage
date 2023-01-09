import { FC, ReactElement, useState } from "react";

import Logo from "app/components/elements/Logo";

import "app/styles/component/modules/navbar.scss";

type TMenuItem = {
  id: number;
  name: string;
  link: string;
};

type MenuItemProps = {
  menuNavbarList: TMenuItem[];
};

const NavBar: FC<MenuItemProps> = ({ menuNavbarList }): ReactElement => {
  const [idActive, setIdActive] = useState(1);

  const Menu: FC<MenuItemProps> = ({ menuNavbarList }): ReactElement => {
    return (
      <ul className="menu">
        {menuNavbarList.map(({ name, link, id }) => {
          return (
            <li
              key={id}
              className={`menu-item ${id === idActive ? "active" : ""}`}
              onClick={() => {
                setIdActive(id);
              }}
            >
              <a href={link} className="menu-link">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <section className="navbar">
      <div className="container">
        <Logo />
        <Menu menuNavbarList={menuNavbarList} />
      </div>
    </section>
  );
};

export default NavBar;
