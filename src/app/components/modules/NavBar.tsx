import { FC, ReactElement, useEffect, useRef } from "react";
import Logo from "app/components/elements/Logo";
import "app/styles/component/modules/NavBar.scss";

type MenuItemType = {
  id: number;
  name: string;
  isActive: boolean;
  link: string;
};

type MenuItemProps = {
  listMenuItem: MenuItemType[];
};

const Menu: FC<MenuItemProps> = ({ listMenuItem }): ReactElement => {
  const MenuItem: FC<MenuItemType> = ({
    name,
    isActive,
    id,
    link,
  }: MenuItemType): ReactElement => {
    const menuItem = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      const menuItemElement = menuItem.current;
      if (isActive === true) {
        menuItemElement?.classList.add("active");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <li key={id} className="menu-item">
        <a ref={menuItem} href={link} className="menu-link">
          {name}
        </a>
      </li>
    );
  };
  return (
    <ul className="menu">
      {listMenuItem.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            isActive={item.isActive}
          />
        );
      })}
    </ul>
  );
};

const NavBar: FC<MenuItemProps> = ({ listMenuItem }): ReactElement => {
  return (
    <section className="navbar">
      <div className="container">
        <Logo />
        <Menu listMenuItem={listMenuItem} />
      </div>
    </section>
  );
};

export default NavBar;
