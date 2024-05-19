import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    <nav>
      <ul>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
