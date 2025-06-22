import React from "react";
import StatsSection from "../../components/Mentorias/StatsSection";
import UpcomingSessions from "../../components/Mentorias/UpcomingSessions";
import MentorshipHistory from "../../components/Mentorias/MentorshipHistory";
import { stats, upcomingSessions, history } from "../../data/mentoriasData";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function MentoriasPage() {
  useDocumentTitle("Mentorías");
  return (
    <div className="p-3 -m-3 bg-blue-200">
      <StatsSection stats={stats} />
      <UpcomingSessions sessions={upcomingSessions} />
      <MentorshipHistory history={history} />
    </div>
  );
}
