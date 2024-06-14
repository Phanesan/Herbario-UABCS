import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ImageUpload from "../assets/Components/ImageUpload";
import useUserStore from "../Global/UserStore";
import TablePlants from "../assets/Components/TablePlants";

const UserPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Perfil");
  const { setToken } = useUserStore((state) => state);

  const handleLogOut = () => {
    setToken(false),
      window.localStorage.removeItem("token"),
      navigate("/LoginPage");
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Perfil":
        return (
          <div>
            <ImageUpload />
          </div>
        );
      case "Historial":
        return <TablePlants></TablePlants>;
      case "Observaciones":

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-green-50 p-4">
      <div className="flex flex-row flex-grow">
        <div className="w-1/4 bg-green-100 p-4 shadow-lg border-r border-gray-200 font-semibold text-zinc-700">
          <button
            onClick={() => setSelectedOption("Perfil")}
            className="text-left text-2xl mb-8 p-4 border-b border-zinc-700/60 w-full hover:scale-110 transition-all duration-300 hover:bg-green-200"
          >
            Imagen de perfil
          </button>
          <button
            onClick={() => setSelectedOption("Historial")}
            className="text-left text-2xl mb-8 p-4 border-b border-zinc-700/60 w-full hover:scale-110 transition-all duration-300 hover:bg-green-200"
          >
            Lista Plantas
          </button>
          <button
            onClick={() => {
              navigate("/RegisterPlant");
            }}
            className="text-left text-2xl mb-8 p-4 border-b border-zinc-700/60 w-full hover:scale-110 transition-all duration-300 hover:bg-green-200"
          >
            Registrar Plantas
          </button>
          <button
            onClick={() => {
              navigate("/RegisterObservation");
            }}
            className="text-left text-2xl mb-8 p-4 border-b border-zinc-700/60 w-full hover:scale-110 transition-all duration-300 hover:bg-green-200"
          >
            Registrar Observación
          </button>
          <button
            onClick={handleLogOut}
            className="block text-2xl mb-8 p-4 border border-black bg-[#FF0000] text-[#FFFFFF] rounded-lg shadow-md hover:scale-110 transition-all hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </div>
        <div className="flex-1 bg-[#F2FBF2] p-4 shadow-inner">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
