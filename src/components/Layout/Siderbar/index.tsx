import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Sidebar: React.FC = () => {
  interface SideBarItemType {
    link: string;
    name: string;
  }

  const sideBarItems: SideBarItemType[] = [
    { link: "/home", name: "Home" },
    { link: "/bills", name: "View Bills" },
    { link: "/bills/new", name: "Create new bill" },
  ];

  return (
    <nav className="sidebar-container">
      <ul className="sidebar-list">
        {sideBarItems.map((item) => (
          <li className="list-elem">
            <NavLink
              to={item.link}
              className={(navData) => (navData.isActive ? "selected-link" : "")}
              end
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
