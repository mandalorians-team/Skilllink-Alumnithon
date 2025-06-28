import React from "react";
import StatsSection from "@/components/Aprendiz/Mentorias/StatsSection";
import UpcomingSessions from "@/components/Aprendiz/Mentorias/UpcomingSessions";
import MentorshipHistory from "@/components/Aprendiz/Mentorias/MentorshipHistory";
import { stats, upcomingSessions, history } from "@/data/mentoriasData";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import LayoutEstudiante from "@/components/comun/LayoutEstudiante";

export default function MentoriasPage() {
  useDocumentTitle("Mentorías");
  return (
    <LayoutEstudiante active="mentorias">
      <main className="flex-1 p-6 bg-blue-200 min-h-screen">
        <StatsSection stats={stats} />
        <UpcomingSessions sessions={upcomingSessions} />
        <MentorshipHistory history={history} />
      </main>
    </LayoutEstudiante>

  );
}
