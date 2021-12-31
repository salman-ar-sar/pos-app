import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <NavLink to="/home" className="selected-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/bill/new" className="selected-item">
            New Bill
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
