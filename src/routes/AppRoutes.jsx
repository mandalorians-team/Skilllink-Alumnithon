import React from "react";
import { Routes, Route } from "react-router-dom";
import MentorPage from "../pages/MentorPage";
import ChatPage from "../pages/ChatPage";
import Error404 from "../pages/Error404";
import MentorProfilePage from "../pages/MentorProfilePage";


const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/mentores" element={<MentorPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/mentor/profile" element={<MentorProfilePage />} />
    </Routes>
    );
};

export default AppRoutes;
