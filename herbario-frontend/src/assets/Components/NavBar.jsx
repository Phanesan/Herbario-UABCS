import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfileIcon from "../icons/ProfileIcon";
import { setClientToken } from "../../Services/HerbarioService";
import useUserStore from "../../Global/UserStore";
import SadIcon from "../icons/logIcon";
import { obternerPermisos } from "../../Services/HerbarioService";

const NavBar = () => {
  const navigate = useNavigate();
  const { setToken, token, setRol } = useUserStore((state) => state);

  useEffect(() => {
    const storageToken = window.localStorage.getItem("token");
    if (storageToken) {
      const userResponse = obternerPermisos(storageToken);
      setRol(userResponse.account?.rol);
      setClientToken(storageToken);
      setToken(true);
    }
  }, []);

  return (
    <div className="flex items-center px-4 bg-[#F2FBF2] text-[#15951D] ">
      <div className="flex flex-row items-center ">
        <picture>
          <img
            src="https://i.imgur.com/OB8SF4I.png"
            alt="Logo"
            className="object-cover w-16 h-16 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </picture>
        <h1
          className="font-bold text-4xl ml-4 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Flora UABCS
        </h1>
      </div>
      <div className="ml-auto flex items-center space-x-6">
        <picture>
          <img
            src="https://imgur.com/DXsiU9d.png"
            alt="Logo"
            className="object-cover w-10 h-10 cursor-pointer"
            onClick={() => {
              navigate("/SearchPage");
            }}
          />
        </picture>
        {token ? (
          <button
            className="bg-green-700/70 rounded-full hover:scale-110 transition hover:bg-green-700 text-white"
            onClick={() => {
              navigate("/UserPage");
            }}
          >
            <ProfileIcon style={"w-12 h-12"}></ProfileIcon>
          </button>
        ) : (
          <button
            className="bg-green-700/70 rounded-full hover:scale-110 transition hover:bg-green-700 text-white"
            onClick={() => {
              navigate("/LoginPage");
            }}
          >
            <SadIcon style={"w-12 h-12"}></SadIcon>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
