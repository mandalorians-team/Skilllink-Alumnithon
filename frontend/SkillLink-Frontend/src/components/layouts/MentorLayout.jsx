import React from "react";
import SidebarMentor from "../components/MentorProfile/SidebarMentor";
import "../styles/App.css";

const MentorLayout = ({ children }) => {
  return (
    <div className="container">
      <SidebarMentor />
      <div className="dashboardMentor-container">
        {children}
      </div>
    </div>
  );
};

export default MentorLayout;
