import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RutaProtegidaLearner({ children }) {
  const { isAuthenticated, role } = useAuth();
  if (!isAuthenticated || (role !== "learner" && role !== "aprendiz")) {
    return <Navigate to="/login" />;
  }
  return children;
}
