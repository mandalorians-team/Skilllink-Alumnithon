import React from "react";
import FeaturedMentor from "@/components/MentorProfile/FeaturedMentor";
import MentorList from "@/components/MentorProfile/MentorList";
import TrendingSkills from "@/components/MentorProfile/TrendingSkills";
import MentorSearchSection from "@/components/MentorProfile/MentorSearchSection";
import "@/styles/MentorPage.css";


const MentorPage = () => {
  return (
      <div className="main">
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
  );
};

export default MentorPage;
