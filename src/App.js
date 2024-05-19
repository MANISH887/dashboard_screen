import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import "./App.scss";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <Router>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar closeSidebar={closeSidebar} />
        </div>
        <div className="main-content">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? "⏴" : "≡"}
          </button>
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
