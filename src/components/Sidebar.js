import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Sidebar.scss";

const Sidebar = ({ closeSidebar }) => (
  <div>
    <h2>Dashboard</h2>
    <nav>
      <ul>
        <li>
          <Link to="/overview" onClick={closeSidebar}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/reports" onClick={closeSidebar}>
            Reports
          </Link>
        </li>
        <li>
          <Link to="/analytics" onClick={closeSidebar}>
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
