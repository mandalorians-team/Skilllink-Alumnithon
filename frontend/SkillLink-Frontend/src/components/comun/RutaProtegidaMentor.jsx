import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RutaProtegidaMentor({ children }) {
  const { isAuthenticated, role } = useAuth();
  if (!isAuthenticated || role !== "mentor") {
    return <Navigate to="/login" />;
  }
  return children;
}
