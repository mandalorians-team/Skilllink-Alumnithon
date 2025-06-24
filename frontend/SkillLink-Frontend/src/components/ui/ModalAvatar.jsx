import React from "react";
import Modal from "./Modal";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import avatarImg from "@/assets/img/Avatar.png";

export default function ModalAvatar({ isOpen, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };

  const handleProfile = () => {
    onClose();
    navigate("/perfil");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Perfil de usuario"
      onConfirm={handleProfile}>
      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.avatar || avatarImg}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500 bg-white"
        />
        <div className="text-center">
          <div className="font-bold text-lg">{user?.name || "Usuario"}</div>
          <div className="text-gray-500 text-sm">
            {user?.email || "Sin correo"}
          </div>
        </div>
        <button
          className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 mt-2"
          onClick={handleProfile}>
          Ver perfil
        </button>
        <button
          className="w-full px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 mt-2"
          onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </Modal>
  );
}
