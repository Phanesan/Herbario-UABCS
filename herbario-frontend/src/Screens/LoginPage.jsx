import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchLoginAPI,
  obternerPermisos,
  setClientToken,
} from "../Services/HerbarioService";
import useUserStore from "../Global/UserStore";

function LoginPage() {
  const { setToken, setRol } = useUserStore((state) => state);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    correo: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetchLoginAPI(loginForm);
      if (response) {
        setClientToken(response);
        window.localStorage.setItem("token", response);
        console.log(localStorage.getItem("token"));
        setToken(true);
        const userResponse = await obternerPermisos(response);
        setRol(userResponse.account.rol);

        navigate("/");
      } else {
        setErrorMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Credenciales incorrectas");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#B9E2BC]">
      <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-40"
            src="https://i.imgur.com/OB8SF4I.png"
            alt="Flora UABCS"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {errorMessage && (
            <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
          )}
          <form onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-110 transition-all duration-300 hover:bg-green-800"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tienes cuenta?{" "}
          <span
            className="font-semibold leading-6 text-green-700 hover:text-green-800 cursor-pointer"
            onClick={() => navigate("/RegisterPage")}
          >
            ¡Regístrate!
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
