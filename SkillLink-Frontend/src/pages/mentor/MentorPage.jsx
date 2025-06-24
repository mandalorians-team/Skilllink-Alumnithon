import React from "react";
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import FeaturedMentor from "../../components/mentor/FeaturedMentor";
import MentorList from "../../components/mentor/MentorList";
import TrendingSkills from "../../components/mentor/TrendingSkills";
import MentorSearchSection from "../../components/mentor/MentorSearchSection";
import "../styles/MentorPage.css";
import "../styles/App.css";

const MentorPage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="mentor-page-container">
          <div className="main-content">
            <MentorSearchSection />
            <div className="mentor-page-body">
              <div className="mentor-sections">
                <section className="featured-mentor">
                  <FeaturedMentor />
                </section>

                <section className="available-mentors">
                  <MentorList />
                </section>

                <aside className="trending-skills">
                  <TrendingSkills />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPage;

